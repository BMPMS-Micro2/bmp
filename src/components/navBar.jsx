import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";

class NavBar extends Component{


    render() {
        return (
            <nav className="navbar navbar-dark bg-info ">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <a className = {"brand-logo "}><h1>BMP Monitoring App</h1></a>
                    <ul className = "list-inline " aria>
                        <li className ="list-inline-item float-md-left "><Link to="/home" style={{ color: '#FFF' }}>Home</Link> </li>
                        <li className ="list-inline-item float-md-left"><Link to="/about" style={{ color: '#FFF' }}>About</Link> </li>
                        <li className ="list-inline-item float-md-left"><Link to="/experiment-assigment" style={{ color: '#FFF' }}>Assignments</Link></li>
                    </ul>

                </div>

            </nav>
        );
    }
}


export default NavBar;