import React, { useEffect, useState } from 'react';

import Footer from '../../components/Footer';
import HomeButtons from './components/HomeButtons';
import HomeOrdersList from './components/HomeOrdersList';
import CancelOrderModal from './components/CancelOrderModal';
import EditOrderModal from './components/EditOrderModal';

function HomePage() {
  const [orders, setOrders] = useState([
      { id: 1, descricao: "Pizza Margherita" },
      { id: 2, descricao: "Hambúrguer Artesanal com Batata" },
      { id: 3, descricao: "Sushi Sashimi Variado" },
      { id: 4, descricao: "Salada Caesar com Frango Grelhado" },
      { id: 5, descricao: "Lasanha à Bolonhesa" },
      { id: 6, descricao: "Moqueca de Peixe" },
      { id: 7, descricao: "Strogonoff de Frango com Arroz" },
      { id: 8, descricao: "Espaguete Carbonara" },
      { id: 9, descricao: "Feijoada Completa" },
      { id: 10, descricao: "Sorvete de Chocolate com Calda" },
  ])

  const [pickedOrder, setPickedOrder] = useState()

  const [isCancelOrderModalOpen, setIsCancelOrderModalOpen] = useState(false)
  const [isEditOrderModalOpen, setIsEditOrderModalOpen] = useState(false)

  useEffect(() => {
    console.log("picked order || ", pickedOrder)
  }, [pickedOrder])

  const onPressCancelOrder = () => {
    if(pickedOrder) {
      setIsCancelOrderModalOpen(true)
    } else {
      alert('Selecione um pedido para cancelar!')
    }
  }

  const onPressEditOrder = () => {
    if(pickedOrder) {
      setIsEditOrderModalOpen(true)
    } else {
      alert('Selecione um pedido para editar!')
    }
  }

  const onPressNewOrder = () => {

  }

  const onPressPayment = () => {
    
  }

  return (
    <div className='grid w-full h-full'>
      <div className='w-full md:h-4/5 flex flex-col justify-around md:flex-row md:justify-between md:items-end md:pt-20'>
        <HomeButtons 
          onPressNewOrder={() => onPressNewOrder()}
          onPressPayment={() => onPressPayment()}
          onPressEditOrder={() => onPressEditOrder()}
          onPressCancelOrder={() => onPressCancelOrder()}
        />
        <HomeOrdersList orders={orders} pickedOrder={pickedOrder} setPickedOrder={setPickedOrder} />
      </div>
      <Footer />
      <EditOrderModal 
        isEditOrderModalOpen={isEditOrderModalOpen}
        setIsEditOrderModalOpen={setIsEditOrderModalOpen}
        pickedOrder={pickedOrder}
      />
      <CancelOrderModal 
        isCancelOrderModalOpen={isCancelOrderModalOpen} 
        setIsCancelOrderModalOpen={setIsCancelOrderModalOpen} 
        pickedOrder={pickedOrder}
      />
    </div>
  )
}

export default HomePage;