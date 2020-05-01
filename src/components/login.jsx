import React, {Component} from "react";
import {Link} from "react-router-dom";


class Login extends Component{
     state = {
         user: null,
         password: null
     }
    render() {
        return (
            <div className="card container col-12 col-lg-4 login-card mt-2 justify-content-center hv-center">
                <form>
                    <h2>Welcome, Please Log In</h2>
                    <label>User:</label>
                    <input type="user"
                       className="form-control"
                       id="user"
                       placeholder="Username"
                       value={this.state.user}
                    /><br/>
                    <label>Password:</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                    /><br/>
                    <Link to="/home">
                        <button type="submit" className="btn bg-info text-white container">Login</button>
                    </Link>
                </form>
            </div>


        );
    }
}

export default Login;