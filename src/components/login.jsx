import React, {Component} from "react";
import {Link} from "react-router-dom";


class Login extends Component{
     state = {
         user: null,
         password: null
     }
    render() {
        return (
            <div className="ccol-md-6 col-md-offset-3 hv-center">
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