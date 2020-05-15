import React, { Component } from "react";
import Select from 'react-select';
import ReactDropdown from "react-dropdown";

class Reactor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            substrate: null,
            size: null,
            description: null
        }

        this.handleSubstrateDropdown = this.handleSubstrateDropdown.bind(this);
        this.handleSizeDropdown = this.handleSizeDropdown.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    substrates = this.props.substrates

    handleDescription = (e) => {
        console.log("Worked (Description)")
        console.log(e.target.value)
        this.setState({
            description: e.target.value

        })
    }

    handleSizeDropdown = (e) => {
        console.log("Worked (Size)")
        console.log(e.value)
        this.setState({
            size: e.value
        })
    }

    handleSubstrateDropdown = (e) => {
        console.log("Worked (Substrate)")
        console.log(e.value)
        this.setState({
            substrate: e.value})
    }

    render() {
        console.log(this.props.substrates)
        return (
            <div className={"card container col-12 col-lg-4 login-card mt-2 "}>
                 <label>{this.props.name}</label>
                <form>
                    <label className={"m-2"}>Select Substrate: </label>
                    <ReactDropdown options={this.props.substrates} onChange={this.handleSubstrateDropdown} />
                    <br></br>
                     <label className={"m-2"}>Select Particulate Size: </label>
                    <ReactDropdown options={this.props.sizes} onChange={this.handleSizeDropdown} /><br></br>
                    <label className={"m-2"}>Reactor Description: </label>
                    <textarea className="form-control" type={"text"} onChange={this.handleDescription} rows={"3"} /><br></br>
                </form>
            </div>
        );
    }
}

export default Reactor;