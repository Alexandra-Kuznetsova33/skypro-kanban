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

function PopNewCard({ onClose }) {
  return (
    <PopNewCardOverlay>
      <PopNewCardBlock>
        <PopNewCardContent>
          <PopNewCardTitle>Создание задачи</PopNewCardTitle>
          <PopNewCardClose onClick={onClose}>&#10006;</PopNewCardClose>
          <PopNewCardWrap>
            <FormNew id="formNewCard" action="#">
              <FormNewBlock>
                <Subttl htmlFor="formTitle">Название задачи</Subttl>
                <FormNewInput
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                />
              </FormNewBlock>
              <FormNewBlock>
                <Subttl htmlFor="textArea">Описание задачи</Subttl>
                <FormNewArea
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                />
              </FormNewBlock>
            </FormNew>
            <Calendar
              highlightedDate="09.09.23"
              deadlineText="Выберите срок исполнения"
              hiddenDateValue="08.09.2023"
            />
          </PopNewCardWrap>
          <Categories>
            <CategoriesP>Категория</CategoriesP>
            <CategoriesThemes>
              {TOPICS.map(topic => (
                <CategoriesTheme
                  key={topic}
                  $bg={topicClassMap[topic] === '_orange' ? '#FFE4C2' : topicClassMap[topic] === '_green' ? '#B4FDD1' : '#E9D4FF'}
                  $text={topicClassMap[topic] === '_orange' ? '#FF6D00' : topicClassMap[topic] === '_green' ? '#06B16E' : '#9A48F1'}
                  $active={topic === 'Web Design'} 
                >
                  <p>{topic}</p>
                </CategoriesTheme>
              ))}
            </CategoriesThemes>
          </Categories>
          <FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardOverlay>
  );
}

export default PopNewCard;