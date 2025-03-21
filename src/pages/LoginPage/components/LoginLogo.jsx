import React from "react";
import Logo from "../../../assets/logo.svg";

const LoginLogo = () => {
    return (
        <div className="grid place-items-center p-5 md:p-20 lg:p-28 w-full max-w-lg">
            <img className="h-25 sm:h-30 md:h-50 mb-2 sm:mb-5" src={Logo} />
            <span className="text-black text-2xl sm:text-3xl md:text-5xl">
                Darshan
            </span>
        </div>
    )
}

export default LoginLogo;