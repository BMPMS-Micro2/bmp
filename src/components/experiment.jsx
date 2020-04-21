import React, { Component } from "react";

class Experiment extends Component{
    state = {
        id: "",
        station: "",
        substrate: "",
        description:"",
        date: ""
    }
    render() {
        return (
            <React.Fragment>
                <h1>Experiment Setup</h1>
                <form>
                <label className={"m-2"}>Select Station: </label>
                  <select>
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
                    <input type={"text"}/><br></br>
                <button className={"btn btn-secondary btn-sm m-2"}>Start Experiment</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Experiment;