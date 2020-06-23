import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import connect from "react-redux/lib/connect/connect";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

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
  this.createData('1', '2020-01-03', 26.0, 'Luis R. Perez', 'Los substratos fueron extraidos de la finca alzamora'),
  this.createData('2', '2020-01-16', 29.0, 'Enrique Gonzalez', 'Todos los particulados son del mismo tamaño'),
  this.createData('3', '2020-02-01', 36.0, 'Javier Huertas', 'Se interrumpio el experimento dado a que no habia luz'),
  this.createData('4', '2020-02-20', 33.0, 'Luis Roman', 'Verificar datos con los del experimento anterior'),
  this.createData('5', '2020-03-09', 26.0, 'Enrique Gonzalez', 'Ultimo experimento antes de interrupcion por Covid-19'),
];

    componentDidMount() {
        // axios.get()
    }
  //   axios.post(link_to_your_flask_app_route, {
  //   firstName: 'yacine',
  //   lastName: 'mahdid'
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

    mapStateToProps = (state) => {
        return {
            //aqui toda la data que queremos a redux
            post: state.id
        }
    }


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

export default connect(mapStateToProps) (ExperimentTable);