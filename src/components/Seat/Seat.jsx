import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles';

const Seat = ({ onClick, select, reserve }) => {
  const classes = useStyles();
  const [color, setColor] = useState(false);

  return (
    <>
      <Box
        className={`${classes.seat} ${classes.avaiable} ${
          select === true && classes.checked
        } ${reserve === true && classes.reserved}`}
        onChange={() => setColor(!color)}
        onClick={onClick}
      />
    </>
  );
};

export default Seat;
