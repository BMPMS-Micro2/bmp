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

    data = [{exp_id: 1, exp_substrate: 'papa', Time: '1:00', temp0:20, temp1:21, temp2: 23, temp3: 27, vol1:100, vol2:120,  vol3:92},
        {exp_id: 1, exp_substrate: 'papa', Time: '2:00', temp0:23, temp1:24, temp2: 27, temp3: 31, vol1:200, vol2:220,  vol3:110},
        {exp_id: 1, exp_substrate: 'papa', Time: '3:00', temp0:25, temp1:27, temp2: 29, temp3: 33, vol1:300, vol2:320,  vol3:123},
        {exp_id: 1, exp_substrate: 'papa', Time: '4:00', temp0:27, temp1:29, temp2: 31, temp3: 33, vol1:400, vol2:420,  vol3:678},
        {exp_id: 1, exp_substrate: 'papa', Time: '5:00', temp0:30, temp1:31, temp2: 37, temp3: 38, vol1:500, vol2:520,  vol3:777}];
}
export default GraphView;