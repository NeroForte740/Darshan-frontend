import React from 'react';

import Modal from '../../../components/Modal';

const EditOrderModal = (props) => {
    const {
        isEditOrderModalOpen,
        setIsEditOrderModalOpen,
        pickedOrder,
    } = props

    return (
        <Modal isOpen={isEditOrderModalOpen} onClose={() => setIsEditOrderModalOpen(false)}>
            <h2 className='text-xl font-bold mb-4'>{`Pedido ${pickedOrder}`}</h2>
            <p className='mb-4'>Editar pedido:</p>
            <div className='flex justify-end space-x-2'>
                <div className='flex justify-between items-center w-full'>
                    <button
                        onClick={() => setIsEditOrderModalOpen(false)}
                        className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer'
                    >
                        Fechar
                    </button>
                    <button className='px-4 py-2 bg-violet-700 text-white rounded hover:bg-violet-800 cursor-pointer'>
                        Salvar
                    </button>
                </div>
            </div>
        </Modal>
    )
}

export default EditOrderModal