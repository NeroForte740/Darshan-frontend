import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../api/authService";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        navigate("/register");
    };

    const handleLogin = async (event) => {
      event.preventDefault();
      setErrors({});

      const newErrors = {};
      if (!email) newErrors.email = "Email é obrigatório";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Email inválido";
      }
      if (!password) newErrors.password = "Senha é obrigatória";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      setLoading(true);
      try {
        await loginUser({ email, password });
        navigate("/home");
      } catch (error) {
        setErrors({ backend: error.message });
      } finally {
        setLoading(false);
      }
    };

    return (
        <form className="grid md:p-5 lg:p-20 w-full max-w-lg" onSubmit={handleLogin}>
            <div className="flex flex-col w-full items-start">
                <div className="flex flex-col w-full">
                    <label className="text-lg text-gray-700 font-normal mb-1 text-left">
                        E-mail
                    </label>
                    <input
                        className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                        type="email"
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-sm text-red-500 font-normal text-right h-5">{errors.email}</p>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-lg text-gray-700 font-normal mb-1 text-left">
                        Senha
                    </label>
                    <input
                        className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                        type="password"
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-sm text-red-500 font-normal text-right h-5">{errors.password}</p>
                </div>
            </div>
            {errors.backend && <p className="text-sm text-red-500 font-normal mt-2">{errors.backend}</p>}
            <div className="flex w-full justify-between mt-8">
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer"
                    onClick={(e) => handleRegister(e)}
                >
                    Cadastrar
                </button>
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Entrando..." : "Entrar"}
                </button>
            </div>
        </form>       
    )
}

export default LoginForm;