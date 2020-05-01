import React, { Component } from "react";
import ReactDropdown from "react-dropdown";
import 'react-dropdown/style.css';

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
                </form>
            </div>
        );
    }
}

export default Reactor;