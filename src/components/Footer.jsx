import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-300 fixed bottom-0 left-0 w-full py-1">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-left">
                    <img className="size-8 md:size-12" src={Logo} />
                </div>
                <div className="text-right">
                    <p className="text-[10px] mt-2">Todos os direitos reservados 2024-2025</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;