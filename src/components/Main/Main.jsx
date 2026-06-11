import { useState, useEffect } from "react";
import Column from "../Column/Column";
import cardsData from "../../data";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];
  const columns = statuses.map((status) => ({
    title: status,
    cards: cardsData.filter((card) => card.status === status),
  }));

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <div className="main__loading">Данные загружаются...</div>
          ) : (
            <div className="main__content">
              {columns.map((col) => (
                <Column key={col.title} title={col.title} cards={col.cards} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
