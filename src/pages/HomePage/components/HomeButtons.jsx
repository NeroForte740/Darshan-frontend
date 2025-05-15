import React from "react";

const HomeButtons = (props) => {
    const {
        onPressNewOrder,
        onPressPayment,
        onPressEditOrder,
        onPressCancelOrder,
    } = props

    return (
        <div className='grid gap-2 w-full md:max-w-72'>
            <button onClick={() => onPressNewOrder()} className='bg-blue-700 hover:bg-blue-800 text-white font-medium text-sm cursor-pointer py-4 rounded-4xl w-full'>
                Novo Pedido
            </button>
            <button onClick={() => onPressPayment()} className='bg-green-700 hover:bg-green-800 text-white font-medium text-sm cursor-pointer py-4 rounded-4xl w-full'>
                Pagamento
            </button>
            <button onClick={() => onPressEditOrder()} className='bg-violet-700 hover:bg-violet-800 text-white font-medium text-sm cursor-pointer py-4 rounded-4xl w-full'>
                Editar Pedido
            </button>
            <button onClick={() => onPressCancelOrder()} className='bg-red-800 hover:bg-red-900 text-white font-medium text-sm cursor-pointer py-4 rounded-4xl w-full'>
                Cancelar Pedido
            </button>
      </div>
    )
  }
  
export default HomeButtons;