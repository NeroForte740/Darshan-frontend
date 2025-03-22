import React from "react";

import Footer from "../../components/Footer";
import LogoContainer from "../../components/LogoContainer";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {

    return (
        <div className="grid w-full h-full">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <LogoContainer />
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
};

export default LoginPage;