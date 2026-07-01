import { Droppable } from '@hello-pangea/dnd';
import Card from '../Card/Card';
import { ColumnWrapper, ColumnTitle, CardsContainer } from './Column.styled';

function Column({ title, cards, skeletonCards }) {
  const items = skeletonCards
    ? skeletonCards.map((_, i) => <Card key={`skeleton-${i}`} skeleton />)
    : cards.map((card, index) => (
        <Card
          key={card._id}
          id={card._id}
          theme={card.topic}
          date={card.date}
          title={card.title}
          index={index}
        />
      ));

  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <CardsContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              border: snapshot.isDraggingOver ? '2px dashed #94A6BE' : 'none',
              transition: 'border 0.2s',
            }}
          >
            {items}
            {/* Пустой элемент для поддержки сброса в пустую колонку */}
            {!skeletonCards && cards.length === 0 && (
              <div style={{ height: '1px' }}></div>
            )}
            {provided.placeholder}
          </CardsContainer>
        )}
      </Droppable>
    </ColumnWrapper>
  );
}

export default Column;
