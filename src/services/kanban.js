import axios from 'axios';

const KANBAN_URL = 'https://wedev-api.sky.pro/api/kanban';

// Получить список всех задач
export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(KANBAN_URL, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': '' },
      timeout: 10000,
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения задач', {
      cause: error,
    });
  }
}

// Получить одну задачу по id
export async function fetchTask({ token, id }) {
  try {
    const response = await axios.get(`${KANBAN_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': '' },
      timeout: 10000,
    });
    return response.data.task;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка получения задачи', {
      cause: error,
    });
  }
}

// Создать новую задачу
export async function createTask({ token, task }) {
  try {
    const response = await axios.post(KANBAN_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
      timeout: 10000,
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка создания задачи', {
      cause: error,
    });
  }
}

// Редактировать задачу
export async function updateTask({ token, id, task }) {
  try {
    const response = await axios.put(`${KANBAN_URL}/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
      timeout: 10000,
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка обновления задачи', {
      cause: error,
    });
  }
}

// Удалить задачу
export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(`${KANBAN_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': '' },
      timeout: 10000,
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка удаления задачи', {
      cause: error,
    });
  }
}
