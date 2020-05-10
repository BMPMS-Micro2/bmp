import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(id, date,temp, user, description) {
  return {
    id,
    date,
    temp,
    user,
    users: [
      { name: 'Enrique Gonzalez', date: '2010-08-05'},
      { name: 'Luis Rivera', date: '2010-08-05' },
      { name: 'Maria Novoa', date: '2010-08-05' },
    ],
    description,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.temp}</TableCell>
        <TableCell align="right">{row.user}</TableCell>
        <TableCell align="right">{row.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Researchers
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                      <TableCell>Date joined</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.users.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                       <TableCell>{historyRow.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('1', '2020-05-09', 26.0, 'Enrique Gonzalez', 'Un dia que me dio la gana'),
  createData('2', '2020-05-09', 29.0, 'Enrique Gonzalez', 'Este dia estaba en regla'),
  createData('3', '2020-05-09', 36.0, 'Enrique Gonzalez', 'Por eso hice muchos experimentos'),
  createData('4', '2020-05-09', 33.0, 'Enrique Gonzalez', 'Mi matricula esta fea'),
  createData('5', '2020-05-09', 26.0, 'Enrique Gonzalez', 'Y la tuya tambien'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Id</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Temperature&nbsp;(C)</TableCell>
            <TableCell align="right">Started by&nbsp;</TableCell>
            <TableCell align="right">Description&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}