import React, {Component} from "react";
import ExperimentSetup from "../components/experimentSetup";

class SetupExperimentView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            substrates: ['Lettuce','Brocolli','Potato'],
            sizes: ['small','medium', 'large']
        };

        this.toggleComp = this.toggleComp.bind(this);
    }

    toggleComp = () => {
        const {show} = this.state
        this.setState({show: !show})
    }

    addSubstrate = (substrate) => {
        console.log(substrate);
        let substrates = [...this.state.substrates, substrate];
        this.setState({
            substrates: substrates
        })
    }

    handleStartExperiment = (e) => {

    }

    stateReturn = () => {
        return [...this.state]
    }

    render() {

        return (
            <div className="container">
                <h1>Experiment Setup</h1>
                <ExperimentSetup substrates = {this.state.substrates} sizes = {this.state.sizes}></ExperimentSetup>
                {this.state.show && <AddSubstrate addSubstrate={this.addSubstrate}/>}
                <button onClick={this.handleStartExperiment} className={"btn bg-info text-white m-2"}>Start Experiment</button>
                <button onClick={this.toggleComp} className={"btn bg-info text-white m-2"}>Add New Substrate</button>
            </div>
        );
    }
}

class AddSubstrate extends Component{

    constructor(props) {
        super(props);
        this.state ={
            newSubstrate: null
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.newSubstrate == null){
            console.log("Box empty");
        }
        else{
            this.props.addSubstrate(this.state.newSubstrate);
        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.state.newSubstrate = e.target.value;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className={"m-2"}>Substrate to add:</label>
                    <input onChange={this.handleChange} id={'substrate'} type={"text"}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default SetupExperimentView;