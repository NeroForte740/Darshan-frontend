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
      ped_description: order.ped_description,
      ped_status_preparo: order.ped_status_preparo,
      ped_status_pag: order.ped_status_pag,
      // ped_totalprice: order.ped_totalprice,
      // ped_client: order.ped_cliente,
      // ped_priori: order.ped_priori,
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