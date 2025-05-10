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
    throw new Error(error.response?.data?.message || 'Erro ao cadastrar usuário');
  }
};