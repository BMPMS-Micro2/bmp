import React, { Component } from "react";
import {Link, Route, Router, Switch} from "react-router-dom";
import Experiment from "./experiment";

class Menu extends Component{
    render() {
        return (
            <div className="container">
                <h1>Main Page</h1>
                <h2>Welcome to the BMP monitoring app!</h2>
                <label>Experiments running:</label><br/><br/>
                <button>Start an Experiment</button>
            </div>


        );
    }
}

export default Menu;