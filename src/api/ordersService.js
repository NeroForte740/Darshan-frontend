import api from './axios';

export const getAllOrders = async () => {
  try {
    const response = await api.get('/pedidos');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao buscar pedidos');
  }
};

export const editOrder = async (order) => {
  try {
    const { ped_id, ped_status_pag, ped_status_preparo, ped_description } = order;

    const response = await api.patch(`/pedidos/update/${ped_id}`, {
      ped_description,
      ped_status_preparo,
      ped_status_pag,
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