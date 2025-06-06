import React from "react";

const CustomInput = ({ label, labelSize, type, placeholder, value, onChange, errorMessage, isTextArea, rows }) => (
    <div className="grid w-full gap-1">
        <label className={`${labelSize} text-gray-700 font-normal text-left`}>
            {label}
        </label>
        {isTextArea ? (
            <textarea
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200 resize-none"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows}
            />
        ) : (
            <input
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        )}
        {errorMessage && <p className="text-sm text-red-500 font-normal text-right h-2 md:h-5">{errorMessage}</p>}
    </div>
)

export default CustomInput;