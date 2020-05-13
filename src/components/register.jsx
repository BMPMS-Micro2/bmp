import React, {Component} from "react";
import {Link} from "react-router-dom";


class Register extends Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {
                first_Name: '',
                last_Name: '',
                username: '',
                password: '',
                email:'',
                super_admin:''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        user.super_admin = '0';
        if (user.first_Name && user.last_Name && user.username && user.password && user.email) {
            // this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="card container col-6 login-card mt-2 justify-content-center hv-center">
                <form>
                    <h2>New user? Register now!</h2>
                    <label>User:</label>
                    <input type="text"
                           className="form-control"
                           id="user"
                           placeholder="Username"
                           value={user.username}
                    /><br/>
                    <label>Password:</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={user.password}
                    /><br/>
                    <label>First Name:</label>
                    <input type="text"
                           className="form-control"
                           id="first_name"
                           placeholder="First Name"
                           value={user.first_Name}
                    /><br/>
                    <label>Last Name:</label>
                    <input type="text"
                           className="form-control"
                           id="last_name"
                           placeholder="Last Name"
                           value={user.last_Name}
                    /><br/>
                    <label>Email:</label>
                    <input type="text"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           value={user.email}
                    /><br/>
                    <Link to="/home">
                        <button type="submit" className="btn bg-info text-white container">Register</button>
                    </Link>
                </form>
            </div>


        );
    }
}

export default Register;