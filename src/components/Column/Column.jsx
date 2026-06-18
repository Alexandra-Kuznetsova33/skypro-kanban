import { DEFAULT_TOPIC_CLASS, topicClassMap } from '../../constants';
import Card from '../Card/Card';

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
       {cards.map((card) => (
          <Card
            key={card.id}
            theme={card.topic}
            themeClass={topicClassMap(card.topic) || DEFAULT_TOPIC_CLASS}   
            date={card.date}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;