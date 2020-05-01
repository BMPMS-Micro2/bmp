import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";

class NavBar extends Component{


    render() {
        return (
            <nav className="navbar navbar-dark bg-info ">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <a className = {"brand-logo "}><h1>BMP Monitoring App</h1></a>
                    <ul className = "list-inline">
                        <li className ="list-inline-item "><Link to="/home">Home</Link> </li>
                        <li className ="list-inline-item"><Link to="/about">About</Link> </li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default NavBar;