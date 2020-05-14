import React, {Component} from "react";
import LineGraph from "../components/lineGraph";

class GraphView extends Component{

    render() {
        return(
        <div className="container">
            <LineGraph data={this.data}></LineGraph>
        </div>
        );
    }

    data = [{exp_id: 1, exp_substrate: 'papa', Time: '1:00', Pressure: 200, Temp: 20},
        {exp_id: 1, exp_substrate: 'papa', Time: '2:00', Pressure: 300, Temp: 23},
        {exp_id: 1, exp_substrate: 'papa', Time: '3:00', Pressure: 400, Temp: 27},
        {exp_id: 1, exp_substrate: 'papa', Time: '4:00', Pressure: 500, Temp: 31},
        {exp_id: 1, exp_substrate: 'papa', Time: '5:00', Pressure: 700, Temp: 40},];
}
export default GraphView;