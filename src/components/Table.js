import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { chartData, chartObject } from '../chart.js';
import moment from 'moment'

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    }
});
    
let id = 0;
function createData(name, buy, sell) {
  id += 1;
  return { id, name, buy, sell };
}
    
function SimpleTable ({ date, classes }) { 
  
  const formattedDate = moment(date).format('MM/DD/YYYY')
  const data = chartObject.find(found => found.date === formattedDate)
  const isEarly = formattedDate < moment().format('MM/DD/YYYY')
  
  let rows
  
  if (data && isEarly) {
    rows = [
      createData('Покупка', data.buy),
      createData('Продажа', data.sell)
    ]
  } else if (!data && isEarly) {
    rows = [
      createData('Покупка', 'Выходной'),
      createData('Продажа', 'Выходной')
    ]
  } else {
    rows = [
      createData('Покупка', 'Невозможно узнать'),
      createData('Продажа', 'Невозможно узнать')
    ]
  }

  return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Курс валют на: {date || chartData[chartData.length - 1][0]}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.buy}</TableCell>
                  <TableCell align="right">{row.sell}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    );
}
export default withStyles(styles)(SimpleTable);