import React from 'react';

import Modal from '../../../components/Modal';
import CustomButton from '../../../components/CustomButton';

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
                    <CustomButton
                        onClick={() => setIsEditOrderModalOpen(false)}
                        text="Fechar"
                        color="gray"
                        paddingVertical="py-2"
                        paddingHorizontal="px-4"
                    />
                    <CustomButton 
                        onClick={() => {}}
                        text="Salvar"
                        color="purple"
                        paddingVertical="py-2"
                        paddingHorizontal="px-4"
                    />
                </div>
            </div>
        </Modal>
    )
}

export default EditOrderModal