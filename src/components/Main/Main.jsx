import { useTasks } from '../../context/useTasks';
import Column from '../Column/Column';
import { STATUSES } from '../../constants.js';
import { StyledMain, MainBlock, MainContent, Loading } from './Main.styled.js';

function Main() {
  const { tasks, loading, error } = useTasks();

  const columns = STATUSES.map((status) => ({
    title: status,
    cards: tasks.filter((task) => task.status === status),
  }));

  return (
    <StyledMain>
      <div className='container'>
        <MainBlock>
          {loading ? (
            <Loading>Данные загружаются</Loading>
          ) : error ? (
            <Loading>{error}</Loading>
          ) : (
            <MainContent>
              {columns.map((col) => (
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
