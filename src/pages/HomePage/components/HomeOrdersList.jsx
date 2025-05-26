import React from "react";

const HomeOrdersList = (props) => {    
    const {
        orders,
        pickedOrder,
        setPickedOrder,
    } = props

    return (
        <div className='flex flex-col justify-between items-center w-full md:max-w-3xl'>
            <span className='font-medium text-md mb-2'>Pedidos em Produção</span>
            <div className='grid h-full w-full max-h-90 md:max-h-130 pl-4 md:pl-8 overflow-auto'>
                {orders && orders.length > 0 ? (
                    orders
                    .sort((a, b) => a.ped_id - b.ped_id)
                    .map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => setPickedOrder(item)}
                            tabIndex={index} 
                            className='flex flex-col items-start min-h-20 w-full p-1 rounded-sm mb-3' 
                            style={{ border: pickedOrder.ped_id == item.ped_id ? '3px solid #6d28d9' : '1px solid #9ca3af' }}
                        >
                            <span className='font-semibold text-lg'>{`Pedido ${item.ped_id}`}</span>
                            <div className='flex items-end h-full'> 
                                <span className='font-normal text-sm text-left'>{item.ped_description}</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex justify-center items-center h-40'>
                        <span className='text-gray-500'>Nenhum pedido encontrado</span>
                    </div>
                )}
            </div>
      </div>
    )
}

export default HomeOrdersList