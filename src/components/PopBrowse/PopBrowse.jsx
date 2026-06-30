import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import {
  topicClassMap,
  DEFAULT_TOPIC_CLASS,
  topicColorKeys,
} from '../../constants';
import { useTasks } from '../../context/useTasks';
import {
  PopBrowseOverlay,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  Status,
  StatusP,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  FormBrowse,
  FormBrowseBlock,
  Subttl,
  FormBrowseArea,
  BtnBrowse,
  BtnGroup,
  BtnBor,
  BtnBg,
  ThemeTop,
  ThemeDown,
  FormEditInput,
} from './PopBrowse.styled';
import { CategoriesTheme } from '../Shared/CategoriesTheme.styled';
import {
  Categories,
  CategoriesP,
  CategoriesThemes,
} from '../PopNewCard/PopNewCard.styled';
import {
  formatDate,
  formatLocalDate,
  toISOString,
  toLocalDateString,
} from '../../utils/formatDate';

function PopBrowse({ card, onClose }) {
  const navigate = useNavigate();
  const { editTask, removeTask } = useTasks();

  // Состояния
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(card?.title || '');
  const [editDescription, setEditDescription] = useState(
    card?.description || '',
  );
  const [editStatus, setEditStatus] = useState(card?.status || 'Без статуса');
  const [editTopic, setEditTopic] = useState(card?.topic || 'Web Design');
  const [editDate, setEditDate] = useState(() => toLocalDateString(card?.date));
  const [loading, setLoading] = useState(false);

  // Ранний возврат, если карточка не передана
  if (!card) return <div>Задача не найдена</div>;

  // Определяем ключ цвета для темы
  const themeKey = topicClassMap[card.topic] || DEFAULT_TOPIC_CLASS;
  const colorKey = topicColorKeys[themeKey] || 'gray';

  // Отформатированная дата для отображения в режиме просмотра
  const cardFormattedDate = card.date ? formatDate(card.date) : '';
  // Дата для подсветки в календаре
  const displayHighlighted = isEditing
    ? formatLocalDate(editDate)
    : cardFormattedDate;

  // Закрытие модалки
  const handleClose = () => {
    if (onClose) onClose();
    else navigate('/');
  };

  // Вход в режим редактирования
  const handleEditClick = () => {
    setEditTitle(card.title);
    setEditDescription(card.description || '');
    setEditStatus(card.status);
    setEditTopic(card.topic);
    setEditDate(toLocalDateString(card.date));
    setIsEditing(true);
  };

  // Отмена редактирования
  const handleCancelEdit = () => {
    setEditTitle(card.title);
    setEditDescription(card.description || '');
    setEditStatus(card.status);
    setEditTopic(card.topic);
    setEditDate(toLocalDateString(card.date));
    setIsEditing(false);
  };

  // Сохранение изменений
  const handleSave = async () => {
    setLoading(true);
    const dateToSend = editDate
      ? toISOString(editDate)
      : new Date().toISOString();
    const result = await editTask(card._id, {
      title: editTitle.trim() || 'Новая задача',
      topic: editTopic,
      status: editStatus,
      description: editDescription,
      date: dateToSend,
    });
    setLoading(false);
    if (result.success) {
      toast.success('Изменения сохранены');
      setIsEditing(false);
      onClose?.();
    } else {
      toast.error(result.error || 'Не удалось сохранить изменения');
    }
  };

  // Удаление задачи
  const handleDelete = async () => {
    if (!window.confirm('Вы уверены, что хотите удалить эту задачу?')) return;
    setLoading(true);
    const result = await removeTask(card._id);
    setLoading(false);
    if (result.success) {
      toast.success('Задача удалена');
      onClose?.();
    } else {
      toast.error(result.error || 'Не удалось удалить задачу');
    }
  };

  // Обработчик выбора даты в календаре
  const handleDateChange = (newDate) => {
    // newDate — строка YYYY-MM-DD
    setEditDate(newDate);
  };

  return (
    <PopBrowseOverlay>
      <PopBrowseBlock>
        <PopBrowseContent>
          <PopBrowseTopBlock>
            {isEditing ? (
              <FormBrowseBlock>
                <Subttl htmlFor='editTitle'>Название задачи</Subttl>
                <FormEditInput
                  type='text'
                  id='editTitle'
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  placeholder='Название задачи'
                />
              </FormBrowseBlock>
            ) : (
              <PopBrowseTitle>{card.title}</PopBrowseTitle>
            )}
            <ThemeTop>
              <CategoriesTheme $colorKey={colorKey} $active={true}>
                <p>{card.topic}</p>
              </CategoriesTheme>
            </ThemeTop>
          </PopBrowseTopBlock>

          <Status>
            <StatusP>Статус</StatusP>
            <StatusThemes>
              {[
                'Без статуса',
                'Нужно сделать',
                'В работе',
                'Тестирование',
                'Готово',
              ].map((status) => (
                <StatusTheme
                  key={status}
                  $active={
                    isEditing ? editStatus === status : card.status === status
                  }
                  onClick={isEditing ? () => setEditStatus(status) : undefined}
                  style={isEditing ? { cursor: 'pointer' } : {}}
                >
                  <p>{status}</p>
                </StatusTheme>
              ))}
            </StatusThemes>
          </Status>

          <PopBrowseWrap>
            <FormBrowse id='formBrowseCard' action='#'>
              <FormBrowseBlock>
                <Subttl htmlFor='textArea01'>Описание задачи</Subttl>
                <FormBrowseArea
                  name='text'
                  id='textArea01'
                  value={isEditing ? editDescription : card.description || ''}
                  readOnly={!isEditing}
                  placeholder='Введите описание задачи...'
                  onChange={
                    isEditing
                      ? (e) => setEditDescription(e.target.value)
                      : undefined
                  }
                />
              </FormBrowseBlock>
            </FormBrowse>
            <Calendar
              highlightedDate={displayHighlighted}
              deadlineDate={displayHighlighted}
              onDateChange={handleDateChange}
            />
          </PopBrowseWrap>

          {isEditing && (
            <Categories>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesThemes>
                {['Web Design', 'Research', 'Copywriting'].map((topic) => {
                  const key = topicClassMap[topic] || '_gray';
                  const cKey = topicColorKeys[key] || 'gray';
                  return (
                    <CategoriesTheme
                      key={topic}
                      $colorKey={cKey}
                      $active={editTopic === topic}
                      onClick={() => setEditTopic(topic)}
                    >
                      <p>{topic}</p>
                    </CategoriesTheme>
                  );
                })}
              </CategoriesThemes>
            </Categories>
          )}

          <ThemeDown>
            <StatusP>Категория</StatusP>
            <CategoriesTheme $colorKey={colorKey} $active={true}>
              <p>{card.topic}</p>
            </CategoriesTheme>
          </ThemeDown>

          <BtnBrowse>
            {isEditing ? (
              <>
                <BtnGroup>
                  <BtnBg type='button' onClick={handleSave} disabled={loading}>
                    {loading ? 'Сохранение...' : 'Сохранить'}
                  </BtnBg>
                  <BtnBor
                    type='button'
                    onClick={handleCancelEdit}
                    disabled={loading}
                  >
                    Отменить
                  </BtnBor>
                  <BtnBor
                    type='button'
                    onClick={handleDelete}
                    disabled={loading}
                  >
                    Удалить задачу
                  </BtnBor>
                </BtnGroup>
                <BtnBg type='button' onClick={handleClose}>
                  Закрыть
                </BtnBg>
              </>
            ) : (
              <>
                <BtnGroup>
                  <BtnBor type='button' onClick={handleEditClick}>
                    Редактировать задачу
                  </BtnBor>
                  <BtnBor type='button' onClick={handleDelete}>
                    Удалить задачу
                  </BtnBor>
                </BtnGroup>
                <BtnBg type='button' onClick={handleClose}>
                  Закрыть
                </BtnBg>
              </>
            )}
          </BtnBrowse>
        </PopBrowseContent>
      </PopBrowseBlock>
    </PopBrowseOverlay>
  );
}

export default PopBrowse;