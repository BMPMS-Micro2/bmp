import React, {Component} from "react";
import lineGraph from "../components/lineGraph";

class GraphView extends Component{

    render() {
        return(
        <div className="container">
            <lineGraph data={this.data}></lineGraph>
        </div>
        );
    }

    data = [{exp_id: 1, exp_substrate: 'papa', xTime: '1:00', yPressure: 200, yTemp: 20},
        {exp_id: 1, exp_substrate: 'papa', xTime: '2:00', yPressure: 300, yTemp: 23},
        {exp_id: 1, exp_substrate: 'papa', xTime: '3:00', yPressure: 400, yTemp: 27},
        {exp_id: 1, exp_substrate: 'papa', xTime: '4:00', yPressure: 500, yTemp: 31},
        {exp_id: 1, exp_substrate: 'papa', xTime: '5:00', yPressure: 700, yTemp: 40},];
}

export default GraphView;