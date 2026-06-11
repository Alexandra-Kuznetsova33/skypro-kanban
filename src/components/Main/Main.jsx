import Column from '../Column/Column';

function Main() {
  const columns = [
    { title: 'Без статуса', cards: [
        { theme: 'Web Design', themeClass: '_orange', date: '30.10.23' },
        { theme: 'Research', themeClass: '_green', date: '30.10.23' },
        { theme: 'Web Design', themeClass: '_orange', date: '30.10.23' },
        { theme: 'Copywriting', themeClass: '_purple', date: '30.10.23' },
        { theme: 'Web Design', themeClass: '_orange', date: '30.10.23' },
      ]
    },
    { title: 'Нужно сделать', cards: [
        { theme: 'Research', themeClass: '_green', date: '30.10.23' }
      ]
    },
    { title: 'В работе', cards: [
        { theme: 'Research', themeClass: '_green', date: '30.10.23' },
        { theme: 'Copywriting', themeClass: '_purple', date: '30.10.23' },
        { theme: 'Web Design', themeClass: '_orange', date: '30.10.23' },
      ]
    },
    { title: 'Тестирование', cards: [
        { theme: 'Research', themeClass: '_green', date: '30.10.23' }
      ]
    },
    { title: 'Готово', cards: [
        { theme: 'Research', themeClass: '_green', date: '30.10.23' }
      ]
    }
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((col, index) => (
              <Column key={index} title={col.title} cards={col.cards} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;