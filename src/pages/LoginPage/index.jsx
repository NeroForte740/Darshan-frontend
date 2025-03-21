import React from "react";

import Footer from "../../components/Footer";
import LoginLogo from "./components/LoginLogo";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {

    return (
        <div className="grid w-full h-full">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <LoginLogo />
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
};

export default LoginPage;