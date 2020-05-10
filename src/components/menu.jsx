import React, { Component } from "react";
import {Link, Route, Router, Switch} from "react-router-dom";
import Experiment from "./experiment";

class Menu extends Component{
    render() {
        return (
            <div className="container">
                <h2>Welcome to the BMP monitoring app!</h2>
                <label className={"m-3"}>Experiments running:  None</label><label>Last Experiments:  None</label><br/><br/>
                <Link to="/experiment">
                     <button className={"btn bg-info text-white m-3"}>Start an Experiment</button>
                </Link>
                 <Link to="/table">
                     <button className={"btn bg-info text-white m-3"}>Experiment Tables</button>
                 </Link>
                 </div>


        );
    }
}

export default Menu;