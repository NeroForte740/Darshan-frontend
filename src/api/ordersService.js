import api from './axios';

export const getAllOrders = async () => {
  try {
    const response = await api.get('/pedidos');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao buscar pedidos');
  }
};

export const cancelOrder = async (id) => {
  try {
    const response = await api.delete(`/pedidos/destroy/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao cancelar o pedido');
  }
};