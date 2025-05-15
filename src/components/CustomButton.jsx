import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const CustomButton = ({ color, text, onClick, paddingVertical, paddingHorizontal, borderRadius, loading }) => {
    const bgColor = {
        red: 'bg-red-800 hover:bg-red-900',
        blue: 'bg-blue-700 hover:bg-blue-800',
        green: 'bg-green-700 hover:bg-green-800',
        purple: 'bg-violet-700 hover:bg-violet-800',
        gray: 'bg-gray-500 hover:bg-gray-600'
    }

    const opacity = loading ? 'opacity-70' : 'opacity-100 cursor-pointer'

    return (
        <button 
            onClick={onClick} 
            className={`${bgColor[color]} ${paddingVertical} ${paddingHorizontal} ${borderRadius} ${opacity} ${!paddingHorizontal && 'w-full'} text-white font-medium text-sm flex items-center justify-center`}
            disabled={loading}
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