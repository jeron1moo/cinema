import { Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import Seat from '../Seat';
import useStyles from './styles';

const Places = ({ id }) => {
  const classes = useStyles();
  const { setSeat } = useActions();
  const selected = useSelector((state) => state.seats.selected[id]);
  const reserved = useSelector((state) => state.seats.reserved[id]);

  const seatsColumns = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];
  const seatsRows = ['A', 'B', 'C', 'D', 'E'];

  const handleClick = (column, row) => {
    setSeat(column + row, id);
  };

  const checkSeat = (sel, value) => {
    if (!sel) return false;
    return sel.seats.includes(value);
  };

  return (
    <Table className={classes.table}>
      <TableBody className={classes.tableBody}>
        {seatsRows.map((row) => (
          <TableRow className={classes.tableRow} key={row}>
            {seatsColumns.map((column) => (
              <TableCell className={classes.tableCell} key={column + row}>
                <Seat
                  onClick={() => handleClick(column, row)}
                  select={checkSeat(selected, column + row)}
                  reserve={checkSeat(reserved, column + row)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Places;
