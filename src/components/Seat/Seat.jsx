import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

const Seat = ({ onClick, select, reserve }) => {
  const classes = useStyles();

  return (
    <Box
      className={`${classes.seat} ${classes.avaiable} ${
        select && classes.checked
      } ${reserve && classes.reserved}`}
      onClick={onClick}
    />
  );
};

export default Seat;
