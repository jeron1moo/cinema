import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Typography from '../Typography';
import useStyles from './styles';

const counts = {
  A: 8,
  B: 10,
  C: 10,
  D: 10,
  E: 14,
};

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
          <Typography bold>{title}</Typography>
          <Typography bold>{name}</Typography>
        </Box>
      )}
      {!children && (
        <>
          <Box className={classes.movieName}>
            <Typography bold>{titleTickets}</Typography>
            <Typography bold className={classes.ticketsAmount}>
              {(selected && selected.seats.length) || '0'}
              {!notTicket && ' tickets'}
            </Typography>
          </Box>
          <Box className={classes.movieName}>
            <Typography bold>Total cost</Typography>
            <Typography bold>{countSum()}$</Typography>
          </Box>
        </>
      )}
      {children}
      {add && (
        <Link to="/user" className={classes.actionAdd}>
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
