import React, { useState } from 'react';

import Modal from '../../../components/Modal';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';

const EditOrderModal = (props) => {
    const {
        isEditOrderModalOpen,
        setIsEditOrderModalOpen,
        pickedOrder,
        onEditOrder,
        editLoading,
    } = props

    const paymentStatusOptions = [
        { value: '', label: 'Selecione o status de pagamento', disabled: true },
        { value: 'pendente', label: 'Pendente' },
        { value: 'pago', label: 'Pago' },
    ];

    const orderStatusOptions = [
        { value: '', label: 'Selecione o status do pedido', disabled: true },
        { value: 'em_preparo', label: 'Em preparo' },
        { value: 'em_transporte', label: 'Em transporte' },
        { value: 'finalizado', label: 'Finalizado' },
    ];

    const [paymentStatus, setPaymentStatus] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [orderDescription, setOrderDescription] = useState('');

    return (
        <Modal isOpen={isEditOrderModalOpen} onClose={() => setIsEditOrderModalOpen(false)}>
            <h2 className='text-xl font-bold mb-4'>{`Pedido ${pickedOrder}`}</h2>
            <form className="grid w-full gap-4" onSubmit={onEditOrder}>
                <div className="grid md:flex md:flex-row md:justify-between md:items-center w-full gap-4">
                    <div className="grid w-full">
                        <label className="text-md text-gray-700 font-normal mb-1 text-left">
                            Status de pagamento
                        </label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
                            value={paymentStatus}
                            onChange={(e) => setPaymentStatus(e.target.value)}
                        >
                            {paymentStatusOptions.map((option) => (
                                <option 
                                    key={`payment-${option.value}`} 
                                    value={option.value}
                                    disabled={option.disabled || false}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="grid w-full">
                        <label className="text-md text-gray-700 font-normal mb-1 text-left">
                            Status do pedido
                        </label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
                            value={orderStatus}
                            onChange={(e) => setOrderStatus(e.target.value)}
                        >
                            {orderStatusOptions.map((option) => (
                                <option 
                                    key={`order-${option.value}`} 
                                    value={option.value}
                                    disabled={option.disabled || false}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <CustomInput 
                    label="Descrição do pedido"
                    labelSize="text-md"
                    type="text"
                    placeholder="Ex: 2 - Água, 1 - Coca cola..."
                    value={orderDescription}
                    onChange={(e) => setOrderDescription(e.target.value)}
                />
                <div className='flex justify-end space-x-2'>
                    <div className='flex justify-between items-center w-full'>
                        <CustomButton
                            onClick={() => setIsEditOrderModalOpen(false)}
                            text="Fechar"
                            color="gray"
                            paddingVertical="py-2"
                            paddingHorizontal="px-4"
                            borderRadius="rounded-2xl"
                        />
                        <CustomButton 
                            type="submit"
                            text="Salvar"
                            color="green"
                            paddingVertical="py-2"
                            paddingHorizontal="px-4"
                            borderRadius="rounded-2xl"
                            loading={editLoading}
                        />
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default EditOrderModal