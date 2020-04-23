import React, { Component } from "react";

class NavBar extends Component{


    render() {
        return (
            <nav className ="nav navbar-brand ">
                <div className = "container ">
                    <a className = {"brand-logo "}><h1>BMP Monitoring App</h1></a>
                    <ul className = "list-inline">
                        <li className ="list-inline-item"><a href="/home">Home</a> </li>
                        <li className ="list-inline-item"><a href="/about">About</a> </li>
                        <li className ="list-inline-item"><a href ="/experiment">Experiment</a> </li>
                    </ul>

                </div>

            </nav>
        );
    }
}

export default NavBar;