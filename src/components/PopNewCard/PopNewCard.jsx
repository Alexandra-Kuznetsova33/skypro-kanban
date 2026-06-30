import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import { TOPICS, topicClassMap, topicColorKeys } from '../../constants';
import {
  PopNewCardOverlay,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  FormNew,
  FormNewBlock,
  Subttl,
  FormNewInput,
  FormNewArea,
  FormNewCreate,
  ErrorText,
  Categories,
  CategoriesP,
  CategoriesThemes,
} from './PopNewCard.styled';
import { CategoriesTheme } from '../Shared/CategoriesTheme.styled';
import { toISOString, formatLocalDate } from '../../utils/formatDate';

function PopNewCard({ onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [selectedDate, setSelectedDate] = useState('');
  const [errors, setErrors] = useState({ title: false, description: false });

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, title: false }));
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, description: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      title: !title.trim(),
      description: !description.trim(),
    };
    setErrors(newErrors);
    if (newErrors.title || newErrors.description) return;
    if (onCreate) {
      const dateToSend = selectedDate
        ? toISOString(selectedDate)
        : new Date().toISOString();
      onCreate({
        title: title.trim(),
        topic,
        status: 'Без статуса',
        description: description.trim(),
        date: dateToSend,
      });
    }
  };

  const handleDateChange = (dateString) => {
    setSelectedDate(dateString);
  };

  const formattedDate = formatLocalDate(selectedDate);
  const isButtonDisabled = errors.title || errors.description;

  return (
    <PopNewCardOverlay>
      <PopNewCardBlock>
        <PopNewCardContent>
          <PopNewCardTitle>Создание задачи</PopNewCardTitle>
          <PopNewCardClose onClick={onClose}>&#10006;</PopNewCardClose>
          <PopNewCardWrap>
            <FormNew id='formNewCard' onSubmit={handleSubmit}>
              <FormNewBlock>
                <Subttl htmlFor='formTitle'>Название задачи</Subttl>
                <FormNewInput
                  type='text'
                  name='name'
                  id='formTitle'
                  placeholder='Введите название задачи...'
                  value={title}
                  onChange={handleTitleChange}
                  $error={errors.title}
                  autoFocus
                />
                {errors.title && <ErrorText>Введите название задачи</ErrorText>}
              </FormNewBlock>

              <FormNewBlock>
                <Subttl htmlFor='textArea'>Описание задачи</Subttl>
                <FormNewArea
                  name='text'
                  id='textArea'
                  placeholder='Введите описание задачи...'
                  value={description}
                  onChange={handleDescriptionChange}
                  $error={errors.description}
                />
                {errors.description && (
                  <ErrorText>Введите описание задачи</ErrorText>
                )}
              </FormNewBlock>
            </FormNew>
            <Calendar
              highlightedDate={formattedDate}
              deadlineDate={formattedDate}
              deadlineText='Выберите срок исполнения'
              onDateChange={handleDateChange}
            />
          </PopNewCardWrap>
          <Categories>
            <CategoriesP>Категория</CategoriesP>
            <CategoriesThemes>
              {TOPICS.map((t) => {
                const key = topicClassMap[t] || '_gray';
                const colorKey = topicColorKeys[key] || 'gray';
                return (
                  <CategoriesTheme
                    key={t}
                    $colorKey={colorKey}
                    $active={t === topic}
                    onClick={() => setTopic(t)}
                  >
                    <p>{t}</p>
                  </CategoriesTheme>
                );
              })}
            </CategoriesThemes>
          </Categories>
          <FormNewCreate
            type='submit'
            form='formNewCard'
            disabled={isButtonDisabled}
          >
            Создать задачу
          </FormNewCreate>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardOverlay>
  );
}

export default PopNewCard;
