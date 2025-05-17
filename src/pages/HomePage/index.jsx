import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import HomeButtons from './components/HomeButtons';
import HomeOrdersList from './components/HomeOrdersList';
import CancelOrderModal from './components/CancelOrderModal';
import EditOrderModal from './components/EditOrderModal';

import { getAllOrders, cancelOrder, editOrder } from '../../api/ordersService';

function HomePage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const [pickedOrder, setPickedOrder] = useState(null);

  const [isCancelOrderModalOpen, setIsCancelOrderModalOpen] = useState(false);
  const [isEditOrderModalOpen, setIsEditOrderModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await getAllOrders();
      console.log("data || ", data)
      setOrders(data);
      setError(null);
    } catch (error) {
      setError("Não foi possível carregar os pedidos. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

   const handleEditOrder = async () => {
    if (!pickedOrder) {
      alert('Selecione um pedido para editar!');
      return;
    }

    try {
      setEditLoading(true);
      await editOrder(pickedOrder);
      setIsEditOrderModalOpen(false);
      
      fetchOrders();
      
      setPickedOrder(null);
      
      alert('Pedido editado com sucesso!');
    } catch (error) {
      alert(error.message);
    } finally {
      setEditLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!pickedOrder) {
      alert('Selecione um pedido para cancelar!');
      return;
    }

    try {
      setCancelLoading(true);
      await cancelOrder(pickedOrder);
      setIsCancelOrderModalOpen(false);
      
      fetchOrders();
      
      setPickedOrder(null);
      
      alert('Pedido cancelado com sucesso!');
    } catch (error) {
      alert(error.message);
    } finally {
      setCancelLoading(false);
    }
  };

  const onClickCancelOrder = () => {
    if(pickedOrder) {
      setIsCancelOrderModalOpen(true)
    } else {
      alert('Selecione um pedido para cancelar!')
    }
  }

  const onClickEditOrder = () => {
    if(pickedOrder) {
      setIsEditOrderModalOpen(true)
    } else {
      alert('Selecione um pedido para editar!')
    }
  }

  const onClickNewOrder = () => {

  }

  return (
    <div className='grid w-full h-full'>
      <div className='w-full md:h-full flex flex-col-reverse justify-around md:flex-row md:justify-between md:items-center'>
        <HomeButtons 
          onClickNewOrder={() => onClickNewOrder()}
          onClickEditOrder={() => onClickEditOrder()}
          onClickCancelOrder={() => onClickCancelOrder()}
        />
        {loading ? (
          <div className="flex items-center justify-center w-full">
            <p className="text-lg text-gray-600">Carregando pedidos...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center w-full">
            <p className="text-lg text-red-600">{error}</p>
          </div>
        ) : (
          <HomeOrdersList orders={orders} pickedOrder={pickedOrder} setPickedOrder={setPickedOrder} />
        )}
      </div>
      <EditOrderModal 
        isEditOrderModalOpen={isEditOrderModalOpen}
        setIsEditOrderModalOpen={setIsEditOrderModalOpen}
        pickedOrder={pickedOrder}
        onEditOrder={handleEditOrder}
        editLoading={editLoading}
      />
      <CancelOrderModal 
        isCancelOrderModalOpen={isCancelOrderModalOpen} 
        setIsCancelOrderModalOpen={setIsCancelOrderModalOpen} 
        pickedOrder={pickedOrder}
        onCancelOrder={handleCancelOrder}
        cancelLoading={cancelLoading}
      />
    </div>
  )
}

export default HomePage;