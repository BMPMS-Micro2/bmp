import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ExperimentTable extends Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    createData(id, date,temp, user, description) {
        return { id, date,temp, user,description };
    }

    rows = [
        this.createData('1', '2020-05-09', 26.0, 'Enrique Gonzalez', 'Un dia que me dio la gana'),
        this.createData('2', '2020-05-09', 29.0, 'Enrique Gonzalez', 'Este dia estaba en regla'),
        this.createData('3', '2020-05-09', 36.0, 'Enrique Gonzalez', 'Por eso hice muchos experimentos'),
        this.createData('4', '2020-05-09', 33.0, 'Enrique Gonzalez', 'Mi matricula esta fea'),
        this.createData('5', '2020-05-09', 26.0, 'Enrique Gonzalez', 'Y la tuya tambien'),
    ];


    render() {
        return (
            <div className="card container mt-2 justify-content-center hv-center">
             <TableContainer component={Paper}>
      <Table size="medium" aria-label="">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Date</TableCell>
              <TableCell align="left">Temperature</TableCell>
              <TableCell align="left">Started by</TableCell>
              <TableCell align="left">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.temp}</TableCell>
                 <TableCell align="left">{row.user}</TableCell>
                 <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        );
    }
}

export default ExperimentTable;