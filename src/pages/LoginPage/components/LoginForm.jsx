import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";

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
            <div className="grid w-full">
                <CustomInput 
                    label="E-mail"
                    labelSize="text-lg"
                    type="email"
                    placeholder="Insira seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessage={errors.email || " "}
                />
                <CustomInput 
                    label="Senha"
                    labelSize="text-lg"
                    type="password"
                    placeholder="Insira sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    errorMessage={errors.password || " "}
                />
            </div>
            {errors.backend && <p className="text-sm text-red-500 font-normal mt-2">{errors.backend}</p>}
            <div className="flex w-full justify-between mt-8 gap-4">
                <CustomButton
                    onClick={(e) => handleRegister(e)}
                    text="Cadastrar"
                    color="purple"
                    paddingVertical="py-2"
                    borderRadius="rounded-3xl"
                />
                <CustomButton
                    type="submit"
                    text='Entrar'
                    color="purple"
                    paddingVertical="py-2"
                    borderRadius="rounded-3xl"
                    loading={loading}
                />
            </div>
        </form>       
    )
}

export default LoginForm;