import axios from 'axios';

const AUTH_URL = 'https://wedev-api.sky.pro/api/user';

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, { login, password }, {
      headers: {
        'Content-Type': '',  
      },
      timeout: 10000,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка входа', {
      cause: error,
    });
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(AUTH_URL, { name, login, password }, {
      headers: {
        'Content-Type': '',   
      },
      timeout: 10000,
    });
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка регистрации', {
      cause: error,
    });
  }
}