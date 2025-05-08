import React from "react";

const HomeOrdersList = (props) => {    
    const {
        orders,
        pickedOrder,
        setPickedOrder,
    } = props

    return (
        <div className='flex flex-col justify-end items-center w-full max-w-xl sm:max-w-2xl md:max-w-3xl md:pt-5'>
            <span className='font-medium text-md mb-3'>Pedidos em Produção</span>
            <div className='grid h-full w-full max-h-100 md:max-h-120 px-4 md:px-8 overflow-auto'>
                {orders.map((item, index) => 
                    <div onClick={() => setPickedOrder(item.id)} tabIndex={index} className='flex flex-col items-start max-h-16 w-full p-1 rounded-sm mb-3' style={{ border: pickedOrder == item.id ? '2px solid #6d28d9' : '1px solid #9ca3af' }}>
                        <span className='font-semibold text-lg mb-2'>{`Pedido ${item.id}`}</span>
                        <span className='font-normal text-sm'>{item.descricao}</span>
                    </div>    
                )}
            </div>
      </div>
    )
}

export default HomeOrdersList