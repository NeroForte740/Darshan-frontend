import React from "react";

const HomeOrdersList = (props) => {    
    const {
        orders,
        pickedOrder,
        setPickedOrder,
    } = props

    return (
        <div className='flex flex-col justify-between items-center w-full max-w-xl sm:max-w-2xl md:max-w-3xl'>
            <span className='font-medium text-md mb-3'>Pedidos em Produção</span>
            <div className='grid h-full w-full max-h-100 md:max-h-130 px-4 md:px-8 overflow-auto'>
                {orders && orders.length > 0 ? (
                    orders.map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => setPickedOrder(item.ped_id)}
                            tabIndex={index} 
                            className='flex flex-col items-start max-h-16 w-full p-1 rounded-sm mb-3' 
                            style={{ border: pickedOrder == item.ped_id ? '2px solid #6d28d9' : '1px solid #9ca3af' }}
                        >
                            <span className='font-semibold text-lg mb-2'>{`Pedido ${item.ped_id}`}</span>
                            <span className='font-normal text-sm'>{item.ped_description}</span>
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