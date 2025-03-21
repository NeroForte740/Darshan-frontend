import React from "react";

const HomeButtons = () => {

    return (
        <div className='md:grid w-full flex justify-between md:max-w-3xs items-center md:items-end md:h-60 md:p-4'>
            <button className='bg-blue-700 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Novo Pedido
            </button>
            <button className='bg-violet-700 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Modificar Pedido
            </button>
            <button className='bg-red-800 text-white font-medium text-[12px] sm:text-sm cursor-pointer py-4 rounded-4xl w-2/7 md:w-[200px] lg:w-[250px] h-15 sm:h-auto sm:w-1/4 px-2'>
                Cancelar Pedido
            </button>
      </div>
    )
  }
  
export default HomeButtons;