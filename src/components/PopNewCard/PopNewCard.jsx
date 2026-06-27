import { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import { TOPICS, topicClassMap } from '../../constants';
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
  Categories,
  CategoriesP,
  CategoriesThemes,
} from './PopNewCard.styled';
import { CategoriesTheme } from '../Shared/CategoriesTheme.styled';

function PopNewCard({ onClose, onCreate, error }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onCreate) {
      onCreate({
        title: title.trim() || 'Новая задача',
        topic,
        status: 'Без статуса',
        description,
        date: new Date().toISOString(),
      });
    }
  };
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
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </FormNewBlock>
              <FormNewBlock>
                <Subttl htmlFor='textArea'>Описание задачи</Subttl>
                <FormNewArea
                  name='text'
                  id='textArea'
                  placeholder='Введите описание задачи...'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormNewBlock>
            </FormNew>
            <Calendar
              highlightedDate=''
              deadlineText='Выберите срок исполнения'
            />
          </PopNewCardWrap>
          <Categories>
            <CategoriesP>Категория</CategoriesP>
            <CategoriesThemes>
              {TOPICS.map((t) => {
                const cls = topicClassMap[t];
                const bg =
                  cls === '_orange'
                    ? '#FFE4C2'
                    : cls === '_green'
                      ? '#B4FDD1'
                      : '#E9D4FF';
                const text =
                  cls === '_orange'
                    ? '#FF6D00'
                    : cls === '_green'
                      ? '#06B16E'
                      : '#9A48F1';
                return (
                  <CategoriesTheme
                    key={t}
                    $bg={bg}
                    $text={text}
                    $active={t === topic}
                    onClick={() => setTopic(t)}
                  >
                    <p>{t}</p>
                  </CategoriesTheme>
                );
              })}
            </CategoriesThemes>
          </Categories>
          {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}
          <FormNewCreate type='submit' form='formNewCard'>
            Создать задачу
          </FormNewCreate>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardOverlay>
  );
}

export default PopNewCard;
