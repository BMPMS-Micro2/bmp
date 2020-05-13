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
                superadmin:''
            },
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        user.superadmin = '0';
        if (user.firstName && user.lastName && user.username && user.password && user.email) {
            // this.props.register(user);
        }
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <form>
                    <h2>New user? Register now!</h2>
                    <label>User:</label>
                    <input type="text"
                           className="form-control"
                           id="user"
                           placeholder="Username"
                           value={this.state.username}
                    /><br/>
                    <label>Password:</label>
                    <input type="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           value={this.state.password}
                    /><br/>
                    <label>First Name:</label>
                    <input type="text"
                           className="form-control"
                           id="first_name"
                           placeholder="First Name"
                           value={this.state.first_Name}
                    /><br/>
                    <label>Last Name:</label>
                    <input type="text"
                           className="form-control"
                           id="last_name"
                           placeholder="Last Name"
                           value={this.state.last_Name}
                    /><br/>
                    <label>Email:</label>
                    <input type="text"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           value={this.state.email}
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