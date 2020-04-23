import React, {Component} from "react";
import NavBar from "./components/navBar";
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./components/menu";
import Experiment from "./components/experiment";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Route path='/home' component={Menu} />
                    <Route path='/experiment' component={Experiment} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App