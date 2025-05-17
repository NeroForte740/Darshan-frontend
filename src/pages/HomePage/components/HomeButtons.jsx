import React from "react";

import CustomButton from "../../../components/CustomButton";

const HomeButtons = (props) => {
    const {
        onClickNewOrder,
        onClickEditOrder,
        onClickCancelOrder,
    } = props

    return (
        <div className='grid gap-2 w-full md:max-w-72'>
            <CustomButton 
                onClick={() => onClickNewOrder()} 
                text="Novo Pedido"
                color="blue"
                paddingVertical="py-3 md:py-4"
                borderRadius="rounded-4xl"
            />
            <CustomButton 
                onClick={() => onClickEditOrder()}
                text="Editar Pedido"
                color="green"
                paddingVertical="py-3 md:py-4"
                borderRadius="rounded-4xl"
            />
            <CustomButton 
                onClick={() => onClickCancelOrder()}
                text="Cancelar Pedido"
                color="red"
                paddingVertical="py-3 md:py-4"
                borderRadius="rounded-4xl"
            />
      </div>
    )
  }
  
export default HomeButtons;