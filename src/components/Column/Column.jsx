import { DEFAULT_TOPIC_CLASS, topicClassMap } from '../../constants.js';
import Card from '../Card/Card';
import { ColumnWrapper, ColumnTitle, CardsContainer } from './Column.styled.js';

function Column({ title, cards, onOpenCard }) {
  return (
     <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {cards.map(card => (
          <Card
            key={card.id}
            theme={card.topic}
            themeClass={topicClassMap[card.topic] || DEFAULT_TOPIC_CLASS}
            date={card.date}
            title={card.title}
            onOpenCard={onOpenCard}
          />
        ))}
      </CardsContainer>
    </ColumnWrapper>
  );
}

export default Column;