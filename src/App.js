import React, {Component} from "react";
import NavBar from "./components/navBar";
import {BrowserRouter, Route} from "react-router-dom";
import Menu from "./components/menu";
import Experiment from "./components/experiment";
import LoginAndRegisterView from "./Pages/LoginAndRegisterView";
import {Switch} from "react-router";
import ExperimentTable from "./components/experimentTable";
import ExperimentTableView from "./Pages/ExperimentTableView";
import SetupExperimentView from "./Pages/SetupExperimentView";
import AssigmentResearcherView from "./Pages/AssigmentResearcherView";
// import Redirect from "react-router/modules/Redirect";

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        {/*<Redirect from="/" to ="/login"/>*/}
                        <Route path='/home' component={Menu} />
                        <Route path='/experiment' component={SetupExperimentView} />
                        <Route path='/' component={LoginAndRegisterView} />
                        <Route path='/table' component={ExperimentTableView} />
                        <Route path='/experiment-assigment' component={AssigmentResearcherView} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App