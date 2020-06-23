import React, {Component} from "react";
import LineGraph from "../components/lineGraph";
import TemperatureAndVolumeTable from "../components/tempAndVolumeTable";

class GraphView extends Component{

    render() {
        return(
        <div className="container">
            <LineGraph data={this.data}></LineGraph>
        </div>
        );
    }

    data = [{exp_id: 5, exp_substrate: 'papa', Time: '0', temp0:22, temp1:21, temp2: 23, temp3: 22, vol1:0, vol2:2,  vol3:5},
        {exp_id: 6, exp_substrate: 'papa', Time: '1', temp0:23, temp1:24, temp2: 24, temp3: 25, vol1:100, vol2:85,  vol3:90},
        {exp_id: 6, exp_substrate: 'papa', Time: '2', temp0:25, temp1:27, temp2: 26, temp3: 25, vol1:140, vol2:100,  vol3:123},
        {exp_id: 6, exp_substrate: 'papa', Time: '3', temp0:27, temp1:29, temp2: 28, temp3: 27, vol1:215, vol2:150,  vol3:200},
        {exp_id: 6, exp_substrate: 'papa', Time: '4', temp0:30, temp1:31, temp2: 30, temp3: 32, vol1:290, vol2:200,  vol3:270},
        {exp_id: 6, exp_substrate: 'papa', Time: '5', temp0:29, temp1:28, temp2: 29, temp3: 29, vol1:320, vol2:230,  vol3:300},
        {exp_id: 6, exp_substrate: 'papa', Time: '6', temp0:28, temp1:29, temp2: 29, temp3: 28, vol1:345, vol2:250,  vol3:340},
        {exp_id: 6, exp_substrate: 'papa', Time: '7', temp0:29, temp1:29, temp2: 30, temp3: 28, vol1:355, vol2:260,  vol3:360},
        {exp_id: 6, exp_substrate: 'papa', Time: '8', temp0:27, temp1:26, temp2: 28, temp3: 27, vol1:390, vol2:280,  vol3:365},
        {exp_id: 6, exp_substrate: 'papa', Time: '9', temp0:26, temp1:26, temp2: 28, temp3: 27, vol1:410, vol2:290,  vol3:370},
        {exp_id: 6, exp_substrate: 'papa', Time: '10', temp0:26, temp1:26, temp2: 27, temp3: 26, vol1:430, vol2:300,  vol3:380},
        {exp_id: 6, exp_substrate: 'papa', Time: '11', temp0:25, temp1:25, temp2: 26, temp3: 25, vol1:440, vol2:308,  vol3:390},
        {exp_id: 6, exp_substrate: 'papa', Time: '12', temp0:24, temp1:24, temp2: 26, temp3: 25, vol1:450, vol2:312,  vol3:395}];
}
export default GraphView;