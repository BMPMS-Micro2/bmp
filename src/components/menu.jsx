import React, { Component } from "react";
import {Link, Route, Router, Switch} from "react-router-dom";
import Experiment from "./experiment";

class Menu extends Component{
    render() {
        return (
            <div className="container">
                <h2>Welcome to the BMP monitoring app!</h2>
                <label>Experiments running:  None</label><br/><br/>
                <Link to="/experiment">
                     <button className={"m-3"}>Start an Experiment</button>
                </Link>
                <button className={"m-3"}>Monitor</button>
                <button className={"m-3"}>Experiment Tables</button>
            </div>


        );
    }
}

export default Menu;