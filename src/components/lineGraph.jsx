import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis , Tooltip, Legend} from 'recharts';

class LineGraph extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data:{
                exp_id:'',
                exp_substrate:'',
                xTime:'',
                yPressure:'',
                yTemp:''
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <label className="m-3"> Experiment: {this.data[0].exp_id}</label>
                <label className="m-3">Substrate: {this.data[0].exp_substrate}</label>
                <LineChart width={800} height={400} data={this.props.data}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="xTime" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="yPressure" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="yTemp" stroke="#82ca9d" />
                </LineChart>
            </React.Fragment>
        );
    }
}

export default LineGraph;