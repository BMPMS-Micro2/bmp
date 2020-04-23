import React, { Component } from "react";

class Experiment extends Component{
    state = {
        id: 0,
        station: "",
        substrate: "",
        description:"",
        date: ""
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
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
                  <select >
                    <option value="X"> Station X </option>
                    <option value="Y"> Station Y </option>
                    <option value="Z"> Station Z </option>
                </select> <br></br>
                <label className={"m-2"}>Select substrate: </label>
                  <select>
                    <option value="X"> Potato </option>
                    <option value="Y"> Carrots </option>
                    <option value="Z"> Celery </option>
                </select><br></br>
                <label className={"m-2"}>Description: </label>
                    <input type={"text"} onChange={this.handleDescription}/><br></br>
                <button onClick={this.handleStartExperiment} className={"btn btn-secondary btn-sm m-2"}>Start Experiment</button>
                </form>
            </div>
        );
    }
}

export default Experiment;