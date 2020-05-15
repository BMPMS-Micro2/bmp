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
                Volume:'',
                Temp:''
            },
            volume:false,
            temp:false,
            // marked1:false,
            // marked2:false
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.checked)
        this.setState({...this.state, [event.target.name]: event.target.checked});
    }

    render() {
        return (
            <React.Fragment>
                <label className="m-3"> Experiment: {this.props.data[0].exp_id}</label>
                <label className="m-3">Substrate: {this.props.data[0].exp_substrate}</label>
                <Checkbox name = "pressure" checked={this.state.pressure} onChange={this.handleChange} color="#82ca9d" /><label> Volume</label>
                <Checkbox name = "temp" checked={this.state.temp} onChange={this.handleChange} color="#82ca9d"/><label> Temperature</label>
                {this.state.pressure && <LineChart width={1000} height={500} data={this.props.data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="Time" label={{value: 'time', angle: 0, position: 'bottom'}}/>
                    {/*{this.state.pressure && <YAxis label={{value: 'pressure', angle: -90, position: 'left'}}/>}*/}
                        <YAxis label={{value: 'volume', angle: -90, position: 'left'}}/>
                    <Tooltip />
                    <Legend verticalAlign='top'/>
                    <Line type="monotone" dataKey="vol1" stroke="#82ca9d" activeDot={{r: 8}}/>}
                    <Line type="monotone" dataKey="vol2" stroke="#8884d8" activeDot={{r: 8}}/>}
                    <Line type="monotone" dataKey="vol3" stroke="#2d75ed" activeDot={{r: 8}}/>}
                </LineChart>}
                {this.state.temp && <LineChart width={1000} height={500} data={this.props.data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="Time" label={{value: 'time', angle: 0, position: 'bottom'}}/>
                    <YAxis label={{value: 'temp', angle: -90, position: 'left'}}/>
                    <Tooltip />
                    <Legend verticalAlign='top'/>
                    <Line type="monotone" dataKey="temp0" stroke="#82ca9d" activeDot={{r: 8}} />
                    <Line type="monotone" dataKey="temp1" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="temp2" stroke="#2d75ed" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="temp3" stroke="#ff0000" activeDot={{r: 8}}/>
                </LineChart>}
                {/*<LineChart width={1000} height={500} data={this.props.data}>*/}
                {/*    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />*/}
                {/*    <XAxis dataKey="Time" label={{value: 'time', angle: 0, position: 'bottom'}}/>*/}
                {/*    <YAxis label={{value: 'temp', angle: -90, position: 'left'}}/>*/}
                {/*    <Tooltip />*/}
                {/*    <Legend verticalAlign='top'/>*/}
                {/*    {this.state.temp && <Line type="monotone" dataKey="Temp" stroke="#82ca9d" />}*/}
                {/*</LineChart>*/}
            </React.Fragment>
        );
    }
}

export default LineGraph;