import React, {Component} from "react";
import NavBar from "./components/navBar";
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./components/menu";
import Experiment from "./components/experiment";
import Login from "./components/login";
import {Switch} from "react-router";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route path='/home' component={Menu} />
                        <Route path='/experiment' component={Experiment} />
                        <Route path='/login' component={Login} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App