import axios from 'axios';
import axiosConfig from './apiConfig';

const KANBAN_URL = 'https://wedev-api.sky.pro/api/kanban';

const authConfig = (token) => ({
  ...axiosConfig,
  headers: {
    ...axiosConfig.headers,
    Authorization: `Bearer ${token}`,
  },
});

export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(KANBAN_URL, authConfig(token));
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения задач', {
      cause: error,
    });
  }
}

export async function fetchTask({ token, id }) {
  try {
    const response = await axios.get(`${KANBAN_URL}/${id}`, authConfig(token));
    return response.data.task;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения задачи', {
      cause: error,
    });
  }
}

export async function createTask({ token, task }) {
  try {
    const response = await axios.post(KANBAN_URL, task, authConfig(token));
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка создания задачи', {
      cause: error,
    });
  }
}

export async function updateTask({ token, id, task }) {
  try {
    const response = await axios.put(
      `${KANBAN_URL}/${id}`,
      task,
      authConfig(token),
    );
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка обновления задачи', {
      cause: error,
    });
  }
}

export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(
      `${KANBAN_URL}/${id}`,
      authConfig(token),
    );
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка удаления задачи', {
      cause: error,
    });
  }
}
