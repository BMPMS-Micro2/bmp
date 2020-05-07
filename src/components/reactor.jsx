import React, { Component } from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';
import Checkbox from 'react-simple-checkbox';

class Reactor extends Component{
    state = {}

    substrates = ['Potato', 'Carrots', 'Celery', 'Something'];
    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }


    render() {
        return (
            <div className={"card container col-12 col-lg-4 login-card mt-2 "}>
                <form>
                    <label className={"m-2"}>Select Substrate: </label>
                    <ReactDropdown options={this.substrates} value = {this.substrates[0]} /><br></br>
                     <label className={"m-2"}>Select Particulate Size: </label>
                    <ReactDropdown options={['Small','Medium', 'Large']} value = {'Small'} /><br></br>
                    <label className={"m-2"}>Description: </label>
                    <textarea className="form-control" type={"text"} onChange={this.handleDescription} rows={"3"} /><br></br>
                </form>
            </div>
        );
    }
}

export default Reactor;