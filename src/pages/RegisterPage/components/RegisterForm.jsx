import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate("/")
    }

    return (
        <div className="grid md:p-5 lg:p-20 w-full max-w-lg mt-5 sm:mt-0">
            <div className="flex flex-col w-full items-start">
                <label className="text-sm md:text-lg text-gray-700 font-normal mb-1">
                    Nome
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                    placeholder="Insira seu nome"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="text-sm md:text-lg text-gray-700 font-normal mb-1">
                    E-mail
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                    placeholder="Insira seu e-mail"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className="text-sm md:text-lg text-gray-700 font-normal mb-1">
                    Senha
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                    placeholder="Insira sua senha"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="text-sm md:text-lg text-gray-700 font-normal mb-1">
                    Confirmar senha
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal"
                    placeholder="Confirme sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full items-end">
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer mt-5"
                    onClick={(e) => handleRegister(e)}
                >
                    Cadastrar
                </button>
            </div>
        </div>       
    )
}

export default RegisterForm;