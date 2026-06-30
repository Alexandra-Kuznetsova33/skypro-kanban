import { DragDropContext } from '@hello-pangea/dnd';
import { useContext } from 'react';
import Column from '../Column/Column';
import { STATUSES } from '../../constants';
import { useTasks } from '../../context/useTasks';
import AuthContext from '../../context/AuthContext';
import {
  StyledMain,
  MainBlock,
  MainContent,
  Loading,
  Empty,
} from './Main.styled';

const skeletonDistribution = [4, 2, 3, 1, 1];

function Main() {
  const { tasks, loading, error, moveTask } = useTasks();
  const { user } = useContext(AuthContext);

  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) return;

    moveTask(draggableId, destination.droppableId);
  };

  if (!user) {
    return (
      <StyledMain>
        <div className='container'>
          <MainBlock>
            <Loading>Пользователь не авторизован</Loading>
          </MainBlock>
        </div>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <div className='container'>
        <MainBlock>
          <DragDropContext onDragEnd={onDragEnd}>
            {loading ? (
              <MainContent>
                {STATUSES.map((status, idx) => (
                  <Column
                    key={status}
                    title={status}
                    cards={[]}
                    skeletonCards={Array(skeletonDistribution[idx]).fill({})}
                  />
                ))}
              </MainContent>
            ) : error ? (
              <Loading>{error}</Loading>
            ) : tasks.length === 0 ? (
              <Empty>Новых задач нет</Empty>
            ) : (
              <MainContent>
                {STATUSES.map((status) => {
                  const cards = tasks.filter((task) => task.status === status);
                  return <Column key={status} title={status} cards={cards} />;
                })}
              </MainContent>
            )}
          </DragDropContext>
        </MainBlock>
      </div>
    </StyledMain>
  );
}

export default Main;
