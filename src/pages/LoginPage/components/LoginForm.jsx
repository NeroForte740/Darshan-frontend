import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (event) => {
      event.preventDefault();
      navigate("/home");
    };

    return (
        <div className="grid p-10 md:p-20 lg:p-28 w-full max-w-lg">
            <div className="flex flex-col w-full items-start">
                <label className="text-lg text-gray-700 font-normal mb-1">
                    Usuário
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-3 w-full font-normal mb-5"
                    placeholder="Insira seu usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className="text-lg text-gray-700 font-normal mb-1">
                    Senha
                </label>
                <input
                    className="text-sm border-1 border-gray-500 rounded-lg p-3 w-full font-normal"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full items-end">
                <span className="text-sm text-black font-semibold cursor-pointer mt-1" onClick={() => navigate("/forgotPassword")}>
                    Esqueceu a senha?
                </span>
                <button
                    className="text-sm bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer mt-8"
                    onClick={(e) => handleLogin(e)}
                >
                    Entrar
                </button>
            </div>
        </div>       
    )
}

export default LoginForm;