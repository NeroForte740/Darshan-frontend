import React from "react";
import Logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="bg-gray-300 fixed bottom-0 left-0 w-full py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-left">
                    <img className="size-16" src={Logo} />
                </div>
                <div className="text-right">
                    <span className="text-lg">Contato</span>
                    <p className="text-sm mt-3">Todos os direitos reservados 2024-2024</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;