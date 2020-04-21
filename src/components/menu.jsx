import React, { Component } from "react";
import Experiment from "./experiment";

class Menu extends Component{
    render() {
        return (
            <React.Fragment>
                <h1>Main Page</h1>
                <h2>Welcome to the BMP monitoring app!</h2>
                <label>Experiments running:</label><br/>
                <button>Start an Experiment</button>

            </React.Fragment>


        );
    }
}

export default Menu;