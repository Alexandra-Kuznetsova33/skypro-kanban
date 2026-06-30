import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../services/kanban';
import AuthContext from './AuthContext';
import { toast } from 'react-toastify';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const { user, handleLogout } = useContext(AuthContext);
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
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTasks(data);
      } catch (err) {
        setError(err.message);
        if (err.response?.status === 401) {
          handleLogout(); 
        }
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, [user, handleLogout]);

  const addTask = useCallback(async (taskData) => {
    try {
      setError('');
      const updatedTasks = await createTask({ token: user.token, task: taskData });
      setTasks(updatedTasks);
      return { success: true };
    } catch (err) {
      const message = err.message;
      setError(message);
      return { success: false, error: message };
    }
  }, [user]);

  const editTask = useCallback(async (id, taskData) => {
    try {
      setError('');
      const updatedTasks = await updateTask({ token: user.token, id, task: taskData });
      setTasks(updatedTasks);
      return { success: true };
    } catch (err) {
      const message = err.message;
      setError(message);
      return { success: false, error: message };
    }
  }, [user]);

  const removeTask = useCallback(async (id) => {
    try {
      setError('');
      const updatedTasks = await deleteTask({ token: user.token, id });
      setTasks(updatedTasks);
      return { success: true };
    } catch (err) {
      const message = err.message;
      setError(message);
      return { success: false, error: message };
    }
  }, [user]);

  const moveTask = useCallback(async (id, newStatus) => {
  const task = tasks.find(t => t._id === id);
  if (!task) return;

  const updatedTask = { ...task, status: newStatus };
  try {
    setError('');
    const updatedTasks = await updateTask({ token: user.token, id, task: updatedTask });
    setTasks(updatedTasks);
    return { success: true };
  } catch (err) {
    const message = err.message;
    setError(message);
    toast.error(message);
    return { success: false, error: message };
  }
}, [tasks, user]);

  return (
    <TaskContext.Provider value={{ tasks, loading, error, addTask, editTask, removeTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;