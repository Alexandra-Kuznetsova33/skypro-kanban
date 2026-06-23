import Column from "../Column/Column";
import cardsData from "../../data";
import { STATUSES } from "../../constants.js";
import { StyledMain, MainBlock, MainContent, Loading } from './Main.styled.js';

function Main({ isLoading }) {

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
                <Column key={col.title} title={col.title} cards={col.cards} />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default Main;
