import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import Typography from '../../components/Typography';
import TicketInfo from '../../components/TicketInfo';
import { useActions } from '../../hooks/useActions';

const User = () => {
  const classes = useStyles();
  const { setReserved } = useActions();
  const selected = useSelector((state) => state.seats.selected);
  const reserved = useSelector((state) => state.seats.reserved);

  const handleClick = (value) => {
    setReserved(value);
  };

  return (
    <Box className={classes.user}>
      <Typography className={classes.userTitle}>Your tickets</Typography>
      <Box className={classes.ticketsList}>
        {Object.entries(selected).map((select) => {
          return (
            <TicketInfo
              key={select[0]}
              className={classes.userSelect}
              id={select[0]}
              titleTickets={select[1].name}
              reserve
              onClick={() => handleClick(select[0])}
            />
          );
        })}
      </Box>
      <Box className={classes.reservedTickets}>
        <TicketInfo title="Reserved tickets" className={classes.userSelect}>
          {Object.entries(reserved).map((reserv) => (
            <Box className={classes.movieName} key={`reserved:${reserv[0]}`}>
              <Typography className={classes.typo}>{reserv[1].name}</Typography>
              <Typography className={classes.typo}>
                {reserv[1].seats.length} tickets
              </Typography>
            </Box>
          ))}
        </TicketInfo>
      </Box>
    </Box>
  );
};

export default User;
