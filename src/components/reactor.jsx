import React, { Component } from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import Checkbox from 'react-simple-checkbox';

class Reactor extends Component{
    state = {
        substrate: null,
        size: null,
        description: null
    }

    substrates = ['Potato', 'Carrots', 'Celery', 'Something'];

    handleDescription = (e) => {
        console.log("Worked (Description)")
        console.log(e.target.value)
        this.setState({
            description: e.target.value

        })
    }

    handleSizeDropdown = (e) => {
        console.log("Worked (Size)")
        console.log(e.target.value)
        this.setState({
            size: e.target.value()
        })
    }

    handleSubstrateDropdown = (e) => {
        console.log("Worked (Substrate)")
        console.log(e.value)
        this.setState({
            substrate: e.target.value})
    }

    render() {
        return (
            <div className={"card container col-12 col-lg-4 login-card mt-2 "}>
                <form>
                    <label className={"m-2"}>Select Substrate: </label>
                    <ReactDropdown options={this.substrates} onChange={this.handleSubstrateDropdown.bind(getSelection())}  /><br></br>
                     <label className={"m-2"}>Select Particulate Size: </label>
                    <ReactDropdown options={['Small','Medium', 'Large']} onChange={this.handleSizeDropdown.bind(getSelection())} /><br></br>
                    <label className={"m-2"}>Reactor Description: </label>
                    <textarea className="form-control" type={"text"} onChange={this.handleDescription} rows={"3"} /><br></br>
                </form>
            </div>
        );
    }
}

export default Reactor;