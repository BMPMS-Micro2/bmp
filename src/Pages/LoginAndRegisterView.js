import React from "react";
import Login from "../components/login";
import Register from "../components/register";

const LoginAndRegisterView = () => {

    return(
        <div className="container">
            {/*<h1>Login</h1>*/}
            <Login></Login>
            {/*<h1>Register</h1>*/}
            <Register></Register>

        </div>
    );

}

export default LoginAndRegisterView;