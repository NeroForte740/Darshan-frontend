import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../../api/authService"

const RegisterForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);

      const navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
    
        const newErrors = {};
        if (!form.name) newErrors.name = "Nome é obrigatório";
        if (!form.email) newErrors.email = "Email é obrigatório";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
          newErrors.email = "Email inválido";
        }
        if (!form.password) newErrors.password = "Senha é obrigatória";
        else if (form.password.length < 6) {
          newErrors.password = "Senha deve ter 6 ou mais caracteres";
        }
        if (form.password !== form.confirmPassword) {
          newErrors.confirmPassword = "Senhas não coincidem";
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          return;
        }

        setLoading(true);
        try {
          await registerUser(form);
          alert("Cadastro realizado com sucesso!");
          navigate("/");
        } catch (error) {
          setErrors({ backend: error.message });
        } finally {
          setLoading(false);
        }
    };

    return (
        <form className="grid md:p-5 lg:p-20 w-full max-w-lg mt-5 sm:mt-0" onSubmit={handleSubmit}>

          <div className="flex flex-col w-full">
            <label className="text-sm md:text-lg text-gray-700 font-normal mb-1 text-left">
                Nome
            </label>
            <input
                className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                type="text"
                placeholder="Insira seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-xs text-red-500 font-normal text-right">{errors.name}</p>}
          </div>

          <div className="flex flex-col w-full">
              <label className="text-sm md:text-lg text-gray-700 font-normal mb-1 text-left">
                  E-mail
              </label>
              <input
                  className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                  type="email"
                  placeholder="Insira seu e-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-xs text-red-500 font-normal text-right">{errors.email}</p>}
          </div>

            <div className="flex flex-col w-full">
              <label className="text-sm md:text-lg text-gray-700 font-normal mb-1 text-left">
                  Senha
              </label>
              <input
                  className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal mb-2"
                  type="password"
                  placeholder="Insira sua senha"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              {errors.password && <p className="text-xs text-red-500 font-normal text-right">{errors.password}</p>}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-sm md:text-lg text-gray-700 font-normal mb-1 text-left">
                  Confirmar senha
              </label>
              <input
                  className="text-sm border-1 border-gray-500 rounded-lg p-2 w-full font-normal"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              />
              {errors.confirmPassword && <p className="text-xs text-red-500 font-normal text-right">{errors.confirmPassword}</p>}
            </div>

            {errors.backend && <p className="text-xs text-red-500 font-normal mt-5">{errors.backend}</p>}
            
            <div className="flex flex-col w-full items-end">
                <button
                    className="text-sm bg-violet-800 hover:bg-violet-900 text-white rounded-3xl border-none px-10 py-2 cursor-pointer mt-5"
                    type="submit" 
                    disabled={loading}
                >
                    {loading ? "..." : "Cadastrar"}
                </button>
            </div>
        </form>       
    )
}

export default RegisterForm;