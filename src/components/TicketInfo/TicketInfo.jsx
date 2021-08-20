import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Typography from '../Typography';
import useStyles from './styles';

const TicketInfo = ({
  id,
  title,
  name,
  className,
  children,
  onClick,
  add,
  notTicket,
  titleTickets,
  reserve,
}) => {
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
    return selected.seats.reduce((acc, cur) => {
      const letter = cur.split('').pop();
      return acc + counts[letter];
    }, 0);
  };

  return (
    <Box className={`${classes.ticketInfo} ${className || ''} `}>
      {title && (
        <Box className={classes.movieName}>
          <Typography className={classes.typo}>{title}</Typography>
          <Typography className={classes.typo}>{name}</Typography>
        </Box>
      )}
      {!children && (
        <>
          <Box className={classes.movieName}>
            <Typography className={classes.typo}>{titleTickets}</Typography>
            <Typography className={classes.typo}>
              {selected && selected.seats.length} {!notTicket && 'tickets'}
            </Typography>
          </Box>
          <Box className={classes.movieName}>
            <Typography className={classes.typo}>Total cost</Typography>
            <Typography className={classes.typo}>{countSum()}$</Typography>
          </Box>
        </>
      )}
      {children}
      {add && (
        <Link to="/user" className={classes.action}>
          <Button onClick={onClick}>Add</Button>
        </Link>
      )}
      {reserve && (
        <Button className={classes.action} onClick={onClick}>
          Reserve
        </Button>
      )}
    </Box>
  );
};

export default TicketInfo;
