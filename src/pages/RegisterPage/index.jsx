import React from "react";

import Footer from "../../components/Footer";
import LogoContainer from "../../components/LogoContainer";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {

    return (
      <div className="grid w-full h-full">
          <div className="flex flex-col md:flex-row justify-center items-center">
              <LogoContainer />
              <RegisterForm />
          </div>
          <Footer />
      </div>
    )
  };
  
export default RegisterPage;