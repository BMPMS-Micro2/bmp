import React, { Component } from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import Reactor from "./reactor";

class Experiment extends Component{
    state = {
        id: 0,
        station: "",
        substrate: "",
        description:"",
        date: ""
    }

    stations = ['Station X', 'Station Y', 'Station Z'];
    substrates = ['Potato', 'Carrots', 'Celery'];

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleNewSubstrate = (e) => {
        this.substrates.concat(e.target.value)
    }

    handleStartExperiment = (e) => {
        e.preventDefault();
        this.setState({
        })
    }

    render() {
        return (
            <div className={"container"}>
                <h1>Experiment Setup</h1>
                <form>
                    <label className={"m-2"}>Experiment ID: {this.state.date} </label>
                    <span className={"m-2"}>{this.state.id}</span>
                    <br/>
                <label className={"m-2"}>Select Station: </label>
                    <ReactDropdown options={this.stations} value = {this.stations[0]} /><br></br>

                    <div className="d-flex justify-content-around">
                        <div className="p-2 col-example text-left">Reactor A</div>
                        <div className="p-2 col-example text-left">Reactor B</div>
                        <div className="p-2 col-example text-left">Reactor C</div>
                    </div>
                    <ul className = "list-group list-group-horizontal">
                            <Reactor></Reactor>
                            <Reactor></Reactor>
                            <Reactor></Reactor>
                    </ul>

                <label className={"m-2"}>Description: </label>
                    <textarea className="form-control" type={"text"} onChange={this.handleDescription} rows={"3"} /><br></br>
                <button onClick={this.handleStartExperiment} className={"btn bg-info text-white m-2"}>Start Experiment</button>

                    <button className="btn bg-info text-white m-2" type="button" data-toggle="collapse"
                            data-target="#collapseNewSubstrate" aria-expanded="false" aria-controls="collapseNewSubstrate">
                        Add New Substrate
                    </button>

                    <div className="collapse" id="collapseNewSubstrate">
                        <form onSubmit={this.handleNewSubstrate}>
                            <div className="card card-body">
                                <input type="text"/>
                            </div>
                        </form>
                    </div>

                </form>
            </div>
        );
    }
}

export default Experiment;