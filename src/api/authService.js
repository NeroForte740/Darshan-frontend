import api from './axios';

export const registerUser = async (userData) => {
  try {
    const { name, email, password } = userData;

    const response = await api.post('/funcionarios/create', {
      name,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erro ao cadastrar usuário');
  }
};

export const loginUser = async (credentials) => {
  try {
    const { email, password } = credentials;

    const response = await api.post('/session', {
      email,
      password,
    });

    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.token);

      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
    }

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Erro ao fazer login');
  }
};