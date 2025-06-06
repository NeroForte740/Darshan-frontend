import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Logout from "../assets/logout.svg";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = (event) => {
        Swal.fire({
            title: 'Sair',
            text: 'Deseja realmente sair?',
            icon: 'question',
            iconColor: '#991b1b',
            showCancelButton: true,
            cancelButtonText: 'Não',
            confirmButtonText: 'Sim',
            confirmButtonColor: '#991b1b',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                event.preventDefault();
                window.location.href = '/';
                localStorage.removeItem('token')
                localStorage.removeItem('user')
            }
        });
    };
    
    return (
        <header className="bg-gray-300 fixed top-0 left-0 w-full py-2">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex flex-row items-center cursor-pointer active:opacity-40" onClick={() => navigate("/home")}>
                    <img className="size-6 md:size-8 mr-1.5 md:mr-2" src={Logo} />
                    <p className="text-md md:text-lg text-gray-900">Darshan</p>
                </div>
                <img 
                    className="size-6 md:size-8 cursor-pointer active:opacity-50" 
                    src={Logout} 
                    onClick={(e) => handleLogout(e)}
                />
            </div>
        </header>
    )
}

export default Header;