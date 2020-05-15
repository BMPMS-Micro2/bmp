import React, { Component } from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import Reactor from "./reactor";
import Checkbox from '@material-ui/core/Checkbox';

class ExperimentSetup extends Component{
    constructor(props) {
        super(props);
         this.state = {
             id: null,
             station: "",
             description:"",
             date: ""
        }
    }


    stations = ['Station X', 'Station Y', 'Station Z'];

    temperatures = ['20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37',
        '38','39','40']

    handleDescription = (e) => {
         console.log(e.target.value);
        this.setState({
            description: e.target.value
        })
    }

    handleNewSubstrate = (e) => {
        this.substrates.concat(e.value)
    }

    handleStartExperiment = (e) => {
         console.log(e.value);
        e.preventDefault();
        this.setState({
        })
    }
    handleStation = (e) => {
        console.log(e.value);
    }
    handleTemperature = (e) => {
        console.log(e.value)
    }


    render() {
        console.log("Props", this.props);
        return (
            <div className={"container"}>

                <form>
                    <label className={"m-2"}>Experiment ID: {this.state.date} </label>
                    <span className={"m-2"}>{this.state.id}</span>
                    <br/>
                    <label className={"m-2"}>Select Station: </label>
                    <ReactDropdown options={this.stations} value = {this.stations[0]} onChange={this.handleStation} /> <br/>

                    <ul className = "list-group list-group-horizontal">
                            <Reactor name={'Reactor A'} substrates = {this.props.substrates} sizes={this.props.sizes}></Reactor>
                            <Reactor name={'Reactor B'} substrates = {this.props.substrates} sizes={this.props.sizes}></Reactor>
                            <Reactor name={'Reactor C'} substrates = {this.props.substrates} sizes={this.props.sizes}></Reactor>
                    </ul>
                    <Checkbox/><label> All Reactors have same substrate</label>
                    <br/>
                    <label>Set Temperature (Celsius):</label>
                    <ReactDropdown options={this.temperatures} value = {this.temperatures[0]} onChange={this.handleTemperature} />

                    <label className={"m-2"}>Experiment Description: </label>
                    <textarea className="form-control" type={"text"} onChange={this.handleDescription} rows={"3"} /><br></br>
                </form>
            </div>
        );
    }
}

export default ExperimentSetup;