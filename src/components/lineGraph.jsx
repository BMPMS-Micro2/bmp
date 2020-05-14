import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip, Legend} from 'recharts';
import Checkbox from "@material-ui/core/Checkbox";

class LineGraph extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:{
                exp_id:'',
                exp_substrate:'',
                Time:'',
                Pressure:'',
                Temp:''
            },
            pressure:false,
            temp:false,
            marked1:false,
            marked2:false
        }
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.name === 'pressure' ? target.checked : target.value;
    //     const value2 = target.name === 'temp' ? target.checked : target.value;
    //     const name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    // }

    render() {
        return (
            <React.Fragment>
                <label className="m-3"> Experiment: {this.props.data[0].exp_id}</label>
                <label className="m-3">Substrate: {this.props.data[0].exp_substrate}</label>
                <LineChart width={1000} height={500} data={this.props.data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="Time" label={{value: 'time', angle: 0, position: 'bottom'}}/>
                        <YAxis label={{value: 'pressure', angle: -90, position: 'left'}}/>
                    <Tooltip />
                    <Legend verticalAlign='top'/>
                    if(this.state.marked1){
                        <Line type="monotone" dataKey="Pressure" stroke="#8884d8" activeDot={{r: 8}}/>
                    }
                    {/*if(this.state.marked2){*/}
                    {/*    /!*<Line type="monotone" dataKey="Temp" stroke="#82ca9d" />*!/*/}
                    {/*}*/}
                </LineChart>
                {/*<input*/}
                {/*    name="pressure"*/}
                {/*    type="checkbox"*/}
                {/*    checked={this.state.marked1}*/}
                {/*    onChange={this.handleInputChange} />*/}
                {/*<input*/}
                {/*    name="temp"*/}
                {/*    type="checkbox"*/}
                {/*    checked={this.state.marked2}*/}
                {/*    onChange={this.handleInputChange} />*/}
                <Checkbox/><label> Pressure</label>
                <Checkbox/><label> Temperature</label>
            </React.Fragment>
        );
    }
}

export default LineGraph;