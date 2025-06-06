import React, { useState } from "react";

import Header from "../../components/Header";
import Footer  from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

import { createOrder } from '../../api/ordersService';

const NewOrderPage = () => {
    const [orderDescription, setOrderDescription] = useState('');
    const [orderClient, setOrderClient] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCreateOrder = async () => {
      if(orderDescription.length >= 1 && orderDescription.length >= 1) {
        try {
          setLoading(true);
          await createOrder({
            description: orderDescription,
            client: orderClient,
          });
          alert('Pedido criado com sucesso!');
          setOrderClient('');
          setOrderDescription('');
        } catch (error) {
          alert(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        alert('Preencha os campos para criar pedido!')
      }
    };
    
    return (
        <div className="grid w-full h-full justify-center items-center">
            <Header />
            <div className="grid border border-gray-200 rounded-xl px-5 py-10 sm:px-10 md:p-10 shadow-xl gap-5 md:gap-10 w-80 sm:w-120 md:w-180">
                <span className="text-black font-medium text-xl  md:text-2xl">
                    Novo Pedido
                </span>
                <CustomInput 
                    label="Cliente"
                    labelSize="text-md"
                    type="text"
                    placeholder="Insira o nome do cliente"
                    value={orderClient}
                    onChange={(e) => setOrderClient(e.target.value)}
                />
                <CustomInput 
                    label="Descrição do Pedido"
                    labelSize="text-md"
                    type="text"
                    placeholder="Ex: 2 - Água, 1 - Coca cola..."
                    value={orderDescription}
                    onChange={(e) => setOrderDescription(e.target.value)}
                    isTextArea={true}
                    rows={4}
                />
                <div className="grid md:px-40">
                    <CustomButton 
                        onClick={() => handleCreateOrder()}
                        text="Concluir Pedido"
                        color="blue"
                        paddingVertical="py-2"
                        paddingHorizontal="px-4"
                        borderRadius="rounded-3xl"
                        disabled={loading}
                    />
                </div>
            </div>
            <Footer />
        </div>
    
    )
};

export default NewOrderPage;