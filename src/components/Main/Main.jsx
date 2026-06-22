import { useState, useEffect } from "react";
import Column from "../Column/Column";
import cardsData from "../../data";
import { STATUSES } from "../../constants.js";
import { StyledMain, MainBlock, MainContent, Loading } from './Main.styled.js';

function Main({ onOpenCard }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const columns = STATUSES.map((status) => ({
    title: status,
    cards: cardsData.filter((card) => card.status === status),
  }));

  return (
     <StyledMain>
      <div className="container">
        <MainBlock>
          {isLoading ? (
            <Loading>Данные загружаются</Loading>
          ) : (
            <MainContent>
              {columns.map(col => (
                <Column key={col.title} title={col.title} cards={col.cards} onOpenCard={onOpenCard} />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default Main;
