import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { fetchTask } from '../../services/kanban';
import PopBrowse from '../../components/PopBrowse/PopBrowse';

const CardPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return;

    const getTask = async () => {
      try {
        setLoading(true);
        setError('');
        const data = await fetchTask({ token: user.token, id });
        setTask(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTask();
  }, [id, user]);

  if (!user) {
    return <div>Необходима авторизация</div>;
  }

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;
  if (!task) return <div>Задача не найдена</div>;

  return <PopBrowse card={task} onClose={() => navigate('/')} />;
};

export default CardPage;