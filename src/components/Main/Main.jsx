import { useState, useEffect, useContext } from 'react';
import Column from "../Column/Column";
import { STATUSES } from "../../constants.js";
import { StyledMain, MainBlock, MainContent, Loading } from './Main.styled.js';
import { fetchTasks } from '../../services/kanban';
import AuthContext from '../../context/AuthContext';

function Main() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return;
    
    const getTasks = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchTasks({ token: user.token });
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, [user]);

  if (!user) {
    return (
      <StyledMain>
        <div className="container">
          <MainBlock>
            <Loading>Пользователь не авторизован</Loading>
          </MainBlock>
        </div>
      </StyledMain>
    );
  }

  const columns = STATUSES.map((status) => ({
    title: status,
    cards: tasks.filter((task) => task.status === status),
  }));

  return (
    <StyledMain>
      <div className="container">
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

