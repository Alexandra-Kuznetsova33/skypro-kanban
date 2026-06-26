import { useNavigate } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import { topicClassMap } from '../../constants';
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
} from './PopBrowse.styled';
import { CategoriesTheme } from '../Shared/CategoriesTheme.styled';
import { formatDate } from '../../utils/formatDate';

function PopBrowse({ card, onClose }) {
  const navigate = useNavigate();

  if (!card) return <div>Задача не найдена</div>;

  const themeClass = topicClassMap[card.topic] || '_gray';
  const bgColor =
    themeClass === '_orange'
      ? '#FFE4C2'
      : themeClass === '_green'
        ? '#B4FDD1'
        : themeClass === '_purple'
          ? '#E9D4FF'
          : '#94A6BE';
  const textColor =
    themeClass === '_orange'
      ? '#FF6D00'
      : themeClass === '_green'
        ? '#06B16E'
        : themeClass === '_purple'
          ? '#9A48F1'
          : '#FFFFFF';

  const handleClose = () => {
    if (onClose) onClose();
    else navigate('/');
  };

  const formattedDate = card.date ? formatDate(card.date) : '';

  return (
    <PopBrowseOverlay>
      <PopBrowseBlock>
        <PopBrowseContent>
          <PopBrowseTopBlock>
            <PopBrowseTitle>{card.title}</PopBrowseTitle>
            <ThemeTop>
              <CategoriesTheme $bg={bgColor} $text={textColor} $active={true}>
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
                <StatusTheme key={status} $active={card.status === status}>
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
                  readOnly
                  placeholder='Введите описание задачи...'
                  value={card.description || ''}
                />
              </FormBrowseBlock>
            </FormBrowse>
            <Calendar highlightedDate='09.09.23' deadlineDate={formattedDate} />
          </PopBrowseWrap>
          <ThemeDown>
            <StatusP>Категория</StatusP>
            <CategoriesTheme $bg={bgColor} $text={textColor} $active={true}>
              <p>{card.topic}</p>
            </CategoriesTheme>
          </ThemeDown>
          <BtnBrowse>
            <BtnGroup>
              <BtnBor type='button'>Редактировать задачу</BtnBor>
              <BtnBor type='button'>Удалить задачу</BtnBor>
            </BtnGroup>
            <BtnBg type='button' onClick={handleClose}>
              Закрыть
            </BtnBg>
          </BtnBrowse>
        </PopBrowseContent>
      </PopBrowseBlock>
    </PopBrowseOverlay>
  );
}

export default PopBrowse;
