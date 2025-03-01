import React from "react";
import Logo from "../../../assets/logo.svg";

const LoginLogo = () => {
    return (
        <div className="grid place-items-center p-10 md:p-20 lg:p-28 w-full max-w-lg">
            <img className="h-60 mb-5" src={Logo} />
            <span className="text-black text-4xl md:text-5xl">
                Darshan
            </span>
        </div>
    )
}

export default LoginLogo;