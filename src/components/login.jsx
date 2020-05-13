import React, {Component} from "react";
import {Link} from "react-router-dom";


class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.username && user.password && user.email) {
            // this.props.login(user);
        }
    }
    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="card container col-6 login-card mt-2 justify-content-center hv-center">
                <form>
                    <h2>Welcome, Please Log In</h2>
                    <label>User:</label>
                    <input type="user"
                       className="form-control"
                       id="user"
                       placeholder="Username"
                       value={username}
                    /><br/>
                    <label>Password:</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
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