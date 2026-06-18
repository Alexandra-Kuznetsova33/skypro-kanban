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
            themeClass={getThemeClass(card.topic)}   
            date={card.date}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}

function getThemeClass(topic) {
  switch (topic) {
    case 'Web Design': return '_orange';
    case 'Research': return '_green';
    case 'Copywriting': return '_purple';
    default: return '_gray';
  }
}

export default Column;