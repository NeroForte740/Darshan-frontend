import React from "react";

import Footer from "../../components/Footer";
import LoginLogo from "./components/LoginLogo";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {

    return (
        <div className="grid w-full h-full">
            <div className="flex flex-col md:flex-row justify-center items-center 
            divide-gray-300 divide-solid divide-y-2 md:divide-x-2 md:divide-y-0"
            >
                <LoginLogo />
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
};

export default LoginPage;