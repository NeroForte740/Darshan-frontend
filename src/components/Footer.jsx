import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-300 fixed bottom-0 left-0 w-full py-2">
            <div className="container mx-auto flex justify-between items-center px-4">
                <img className="size-6 md:size-8" src={Logo} />
                <p className="text-[10px] text-gray-700">Todos os direitos reservados 2024-2025</p>
            </div>
        </footer>
    )
}

export default Footer;