import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Typography from '../Typography';
import useStyles from './styles';

const TicketInfo = ({ id, title, name, className, children, onClick }) => {
  const classes = useStyles();
  const selected = useSelector((state) => state.seats.selected[id]);

  const counts = {
    A: 8,
    B: 10,
    C: 10,
    D: 10,
    E: 14,
  };

  const countSum = () => {
    if (!selected) return 0;
    return selected.reduce((acc, cur) => {
      const letter = cur.split('').pop();
      return acc + counts[letter];
    }, 0);
  };

  return (
    <Box className={`${classes.ticketInfo} ${className || ''} `}>
      <Box className={classes.movieName}>
        <Typography className={classes.typo}>{title}</Typography>
        <Typography className={classes.typo}>{name}</Typography>
      </Box>
      {!children && (
        <>
          <Box className={classes.movieName}>
            <Typography className={classes.typo}>Tickets amount</Typography>
            <Typography className={classes.typo}>
              {selected && selected.length} tickets
            </Typography>
          </Box>
          <Box className={classes.movieName}>
            <Typography className={classes.typo}>Total cost</Typography>
            <Typography className={classes.typo}>{countSum()}$</Typography>
          </Box>
        </>
      )}
      {children}
      <Button className={classes.action} onClick={onClick}>
        {onClick && 'Reserve'}
        {!onClick && <Link to="/user">Add</Link>}
      </Button>
    </Box>
  );
};

export default TicketInfo;
