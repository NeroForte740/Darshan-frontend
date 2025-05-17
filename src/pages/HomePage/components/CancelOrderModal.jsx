import React from 'react';

import Modal from '../../../components/Modal';
import CustomButton from '../../../components/CustomButton';

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
                    <CustomButton
                        onClick={() => setIsCancelOrderModalOpen(false)}
                        text="Fechar"
                        color="gray"
                        paddingVertical="py-2"
                        paddingHorizontal="px-4"
                        borderRadius="rounded-2xl"
                    >
                        Fechar
                    </CustomButton>
                    <CustomButton 
                        onClick={onCancelOrder}
                        text="Cancelar pedido"
                        color="red"
                        paddingVertical="py-2"
                        paddingHorizontal="px-4"
                        borderRadius="rounded-2xl"
                        disabled={cancelLoading}
                    />
                </div>
            </div>
        </Modal>
    )
}

export default CancelOrderModal