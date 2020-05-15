import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TemperatureAndVolumeTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    createData(time, temp0, temp1, temp2, temp3, vol0, vol1, vol2) {
        return {time,temp0, temp1, temp2, temp3, vol0, vol1, vol2 };
    }

    rows = [
        this.createData("1:00",26,27,26,26,45,20,26),
        this.createData("2:00",28,28,27,28,50,22,32),
        this.createData("3:00",25,26,25,25,52,25,35),
        this.createData("4:00",27,28,27,27,56,28,40),
        this.createData("5:00",29,29,28,29,62,30,44),
        this.createData("6:00",30,31,29,30,69,35,46),
        this.createData("7:00",28,29,27,28,74,39,50),
        this.createData("8:00",27,28,26,26,77,43,52),
        this.createData("9:00",26,27,28,26,87,45,55),
        this.createData("10:00",25,26,25,25,90,46,60 ),
    ];


    render() {
        return (
            <div className="card container mt-2 justify-content-center hv-center">
             <TableContainer component={Paper}>
      <Table size="medium" aria-label="">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="left">Bath Temp </TableCell>
              <TableCell align="left">Reactor A Temp</TableCell>
              <TableCell align="left">Reactor B Temp</TableCell>
              <TableCell align="left">Reactor C Temp</TableCell>
               <TableCell align="left">Reactor A Vol</TableCell>
              <TableCell align="left">Reactor B Vol</TableCell>
              <TableCell align="left">Reactor C Vol</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.rows.map((row) => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
                <TableCell align="left">{row.temp0}</TableCell>
                <TableCell align="left">{row.temp1}</TableCell>
                <TableCell align="left">{row.temp2}</TableCell>
                <TableCell align="left">{row.temp3}</TableCell>
                <TableCell align="left">{row.vol0}</TableCell>
                <TableCell align="left">{row.vol1}</TableCell>
                <TableCell align="left">{row.vol2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        );
    }
}

export default TemperatureAndVolumeTable;