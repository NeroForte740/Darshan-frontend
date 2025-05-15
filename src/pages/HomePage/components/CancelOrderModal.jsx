import React from 'react';

import Modal from '../../../components/Modal';

const CancelOrderModal = (props) => {
    const {
        isCancelOrderModalOpen,
        setIsCancelOrderModalOpen,
        pickedOrder,
        onCancelOrder,
        cancelLoading
    } = props

    return (
        <Modal isOpen={isCancelOrderModalOpen} onClose={() => setIsCancelOrderModalOpen(false)}>
            <h2 className='text-xl font-bold mb-4'>{`Pedido ${pickedOrder}`}</h2>
            <p className='mb-4'>Deseja mesmo cancelar esse pedido?</p>
            <div className='flex justify-end space-x-2'>
                <div className='flex justify-between items-center w-full'>
                    <button
                        onClick={() => setIsCancelOrderModalOpen(false)}
                        className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer'
                        disabled={cancelLoading}
                    >
                        Fechar
                    </button>
                    <button 
                        onClick={onCancelOrder}
                        disabled={cancelLoading}
                        className='px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 cursor-pointer'
                    >
                        {cancelLoading ? 'Cancelando...' : 'Cancelar pedido'}
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default CancelOrderModal