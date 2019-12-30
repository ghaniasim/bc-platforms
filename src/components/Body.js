import React from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper, 
    makeStyles 
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  tableBody: {
    marginTop: 16, 
    width: '50%'
  }
});

function createData(id, age, sex, postalCode) {
  return { id, age, sex, postalCode };
}

const rows = [
  createData('1', '31', 'M', '00310'),
  createData('2', '38', 'F', '00650'),
  createData('3', '27', 'M', '00411'),
  createData('4', '41', 'F', '00650'),
  createData('5', '51', 'M', '00310')
];

export default function Body() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableBody}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Sex</TableCell>
            <TableCell>Postal Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.sex}</TableCell>
              <TableCell>{row.postalCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}