import api from './axios';

export const getAllOrders = async () => {
  try {
    const response = await api.get('/pedidos');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao buscar pedidos');
  }
};

export const editOrder = async (id, order) => {
  try {
    const response = await api.patch(`/pedidos/update/${id}`, {
      description: order.ped_description,
      status_preparo: order.ped_status_preparo,
      status_pag: order.ped_status_pag,
    });
    
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao editar o pedido');
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

export const createOrder = async (order) => {
  try {
    const response = await api.post('/pedidos/create', {
      description: order.description,
      status_preparo: 'Em preparo',
      status_pag: 'Pendente',
      client: order.client,
    });
    
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao criar o pedido');
  }
};