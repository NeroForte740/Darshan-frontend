import React from "react";

const HomeButtons = (props) => {
    const {
        onPressNewOrder,
        onPressPayment,
        onPressEditOrder,
        onPressCancelOrder,
    } = props

    return (
        <div className='md:grid w-full flex justify-between md:max-w-3xs items-center md:items-end md:h-60'>
            <button onClick={() => onPressNewOrder()} className='bg-blue-700 hover:bg-blue-800 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Novo Pedido
            </button>
            <button onClick={() => onPressPayment()} className='bg-green-700 hover:bg-green-800 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Pagamento
            </button>
            <button onClick={() => onPressEditOrder()} className='bg-violet-700 hover:bg-violet-800 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Editar Pedido
            </button>
            <button onClick={() => onPressCancelOrder()} className='bg-red-800 hover:bg-red-900 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Cancelar Pedido
            </button>
      </div>
    )
  }
  
export default HomeButtons;