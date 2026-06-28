import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/kanban';
import AuthContext from './AuthContext';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) return; // ничего не делаем, если пользователь не авторизован
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

  const addTask = useCallback(async (taskData) => {
    try {
      setError('');
      const updatedTasks = await createTask({ token: user.token, task: taskData });
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }, [user]);

  const editTask = useCallback(async (id, taskData) => {
    try {
      setError('');
      const updatedTasks = await updateTask({ token: user.token, id, task: taskData });
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }, [user]);

  const removeTask = useCallback(async (id) => {
    try {
      setError('');
      const updatedTasks = await deleteTask({ token: user.token, id });
      setTasks(updatedTasks);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  }, [user]);

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, editTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;