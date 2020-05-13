import React from "react";
import Login from "../components/login";
import Register from "../components/register";

const LoginAndRegisterView = () => {

    return(
        <div className="container">
            <Login></Login>
            <Register></Register>
        </div>
    );

}
export default LoginAndRegisterView;