import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";

class NavBar extends Component{


    render() {
        return (
            <nav className ="nav navbar-brand ">
                <div className = "container ">
                    <a className = {"brand-logo "}><h1>BMP Monitoring App</h1></a>
                    <ul className = "list-inline">
                        <li className ="list-inline-item"><Link to="/home">Home</Link> </li>
                        <li className ="list-inline-item"><Link to="/about">About</Link> </li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default NavBar;