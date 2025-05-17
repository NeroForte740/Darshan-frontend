import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";

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

      const onClickGoBack = (event) => {
        event.preventDefault();
        navigate("/");
    };
    
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
        if (!form.confirmPassword) newErrors.confirmPassword = "Confirmar senha é obrigatório"
        else if (form.password !== form.confirmPassword) {
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
          <CustomInput 
            label="Nome"
            labelSize="text-lg"
            type="text"
            placeholder="Insira seu nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            errorMessage={errors.name || " "}
          />
          <CustomInput 
            label="E-mail"
            labelSize="text-lg"
            type="email"
            placeholder="Insira seu e-mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            errorMessage={errors.email || " "}
          />
          <CustomInput 
            label="Senha"
            labelSize="text-lg"
            type="password"
            placeholder="Insira sua senha"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            errorMessage={errors.password || " "}
          />
          <CustomInput 
            label="Confirmar senha"
            labelSize="text-lg"
            type="password"
            placeholder="Confirme sua senha"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            errorMessage={errors.confirmPassword || " "}
          />
          <p className="text-sm text-red-500 font-normal mt-5 h-5">{errors.backend}</p>  
          <div className="flex w-full justify-between gap-4">
            <CustomButton
              onClick={(e) => onClickGoBack(e)}
              text="Voltar"
              color="purple"
              paddingVertical="py-2"
              borderRadius="rounded-3xl"
            />
            <CustomButton
              type="submit"
              text="Cadastrar"
              color="purple"
              paddingVertical="py-2"
              borderRadius="rounded-3xl"
              loading={loading}
            />
          </div>
        </form>       
    )
}

export default RegisterForm;