import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const CustomButton = ({ color, text, onClick, paddingVertical, paddingHorizontal, borderRadius, loading, disabled }) => {
    const bgColor = {
        red: `bg-red-800 ${loading || disabled ? '' : 'hover:bg-red-900'}`,
        blue: `bg-blue-700 ${loading || disabled ? '' : 'hover:bg-blue-800'}`,
        green: `bg-green-700 ${loading || disabled ? '' : 'hover:bg-green-800'}`,
        purple: `bg-violet-700 ${loading || disabled ? '' : 'hover:bg-violet-800'}`,
        gray: `bg-gray-500 ${loading || disabled ? '' : 'hover:bg-gray-600'}`
    }

    const opacity = loading || disabled ? 'opacity-70' : 'opacity-100 cursor-pointer active:opacity-50'

    return (
        <button 
            onClick={onClick} 
            className={`${bgColor[color]} ${paddingVertical} ${paddingHorizontal} ${borderRadius} ${opacity} ${!paddingHorizontal && 'w-full'} text-white font-medium text-sm flex items-center justify-center`}
            disabled={loading || disabled}
        >
            {loading? 
                <LoadingSpinner />
            :
                text
            }
        </button>
    )
}

export default CustomButton;