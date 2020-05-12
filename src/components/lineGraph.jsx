import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class LineGraph extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    data = [{name: '1:00', uv: 400, pv: 2400, amt: 2400},{name: '2:00', uv: 800, pv: 2400, amt: 2400},
    {name: '3:00', uv: 100, pv: 2400, amt: 2400},
    {name: '4:00', uv: 1400, pv: 2400, amt: 2400},{name: '5:00', uv: 350, pv: 2400, amt: 2400},];

    render() {
        return (
                <LineChart width={800} height={400} data={this.data}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis/>
                </LineChart>
        );
    }
}

export default LineGraph;