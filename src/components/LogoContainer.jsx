import React from "react";
import Logo from "../assets/logo.svg";

const LogoContainer = () => {
    return (
        <div className="grid place-items-center md:p-5 lg:p-20 w-full max-w-lg">
            <img className="h-25 sm:h-30 md:h-50 mb-2 sm:mb-5" src={Logo} />
            <span className="text-black text-2xl sm:text-3xl md:text-5xl">
                Darshan
            </span>
        </div>
    )
}

export default LogoContainer;