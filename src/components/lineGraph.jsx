import React, {Component} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

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

    //data = [{name: '1:00', uv: 400, pv: 2400, amt: 2400},{name: '2:00', uv: 800, pv: 2400, amt: 2400},
    // {name: '3:00', uv: 100, pv: 2400, amt: 2400},
    // {name: '4:00', uv: 1400, pv: 2400, amt: 2400},{name: '5:00', uv: 350, pv: 2400, amt: 2400},];
    // props = [{xTime: '1:00', yPressure: 200, yTemp: 20},{xTime: '2:00', yPressure: 300, yTemp: 23},
    //     {xTime: '3:00', yPressure: 400, yTemp: 27},
    //     {xTime: '4:00', yPressure: 500, yTemp: 31},{xTime: '5:00', yPressure: 700, yTemp: 40},];
    // xTime = ['1.00', '2.00', '3.00', '4.00', '5.00'];
    // yPressure = [200, 300, 400, 500, 700];
    // yTemp = [20, 23, 27, 31, 40];
    // exp_substrate = ['bat soup'];
    // exp_id = [13];

    render() {
        return (
                <LineChart width={800} height={400} data={this.props}>
                  <Line type="monotone" dataKey="yPressure" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="xTime" />
                        <YAxis/>
                </LineChart>
        );
    }
}

export default LineGraph;