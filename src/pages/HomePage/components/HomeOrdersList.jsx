import React from "react";

const HomeOrdersList = (props) => {    
    const {
        orders,
        pickedOrder,
        setPickedOrder,
    } = props

    const getStatusColor = (status) => {
        switch(status) {
            case 'Pago':
                return 'bg-green-100 text-green-800';
            case 'Pendente':
                return 'bg-yellow-100 text-yellow-800';
            case 'Finalizado':
                return 'bg-blue-100 text-blue-800';
            case 'Em preparo':
                return 'bg-purple-100 text-purple-800';
            case 'Em transporte':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    }

    return (
        <div className='flex flex-col justify-between items-center w-full md:max-w-3xl'>
            <span className='font-medium text-md mb-2'>Pedidos em Produção</span>
            <div className='grid h-full w-full max-h-80 md:max-h-130 pl-4 md:pl-8 overflow-auto'>
                {orders && orders.length > 0 ? (
                    orders
                    .sort((a, b) => a.ped_id - b.ped_id)
                    .map((item, index) => (
                        <div 
                            key={index}
                            onClick={() => setPickedOrder(item)}
                            tabIndex={index} 
                            className='flex flex-col w-full h-30 rounded-lg mb-3 cursor-pointer hover:shadow-md p-2 md:p-4' 
                            style={{ 
                                border: pickedOrder.ped_id == item.ped_id ? '2px solid #6d28d9' : '1px solid #e5e7eb',
                                backgroundColor: pickedOrder.ped_id == item.ped_id ? '#f5f3ff' : 'white'
                            }}
                        >
                            <div className='flex justify-between items-center w-full mb-1'>
                                <div className='flex flex-col items-start w-30'>
                                    <span className='font-semibold text-md'>{`Pedido #${item.ped_id}`}</span>
                                    <span className='text-xs text-left text-gray-500 line-clamp-1'>{item.ped_client}</span>
                                </div>
                                <div className='flex flex-col items-end gap-1'>
                                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(item.ped_status_pag)}`}>
                                        {item.ped_status_pag}
                                    </span>
                                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(item.ped_status_preparo)}`}>
                                        {item.ped_status_preparo}
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-end h-full w-full'> 
                                <span className='font-normal text-sm text-left text-gray-600 line-clamp-1'>{item.ped_description}</span>
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

export default HomeOrdersList;