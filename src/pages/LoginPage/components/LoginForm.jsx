import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate("/register")
    }

    const handleLogin = (event) => {
      event.preventDefault();
      navigate("/home");
    };

    return (
        <div className="grid md:p-5 lg:p-20 w-full max-w-lg">
            <div className="flex flex-col w-full items-start">
                <label className="text-lg text-gray-700 font-normal mb-1">
                    E-mail
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-5"
                    placeholder="Insira seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="text-lg text-gray-700 font-normal mb-1">
                    Senha
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex w-full justify-between mt-8">
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer"
                    onClick={(e) => handleRegister(e)}
                >
                    Cadastrar
                </button>
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer"
                    onClick={(e) => handleLogin(e)}
                >
                    Entrar
                </button>
            </div>
        </div>       
    )
}

export default LoginForm;