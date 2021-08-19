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

  console.log('%cuser.jsx line:12 reserved', 'color: #007acc;', reserved);
  return (
    <Box className={classes.user}>
      <Typography className={classes.userTitle}>Your tickets</Typography>
      <Box className={classes.ticketsList}>
        {Object.entries(selected).map((select) => {
          return (
            <TicketInfo
              key={selected[0]}
              className={classes.userSelect}
              id={select[0]}
              onClick={() => handleClick(select[0])}
            />
          );
        })}
      </Box>
      <Box className={classes.reservedTickets}>
        <TicketInfo title="Reserved tickets" className={classes.userSelect}>
          {Object.entries(reserved).map((reserv) => {
            console.log('%cuser.jsx line:31 reserv', 'color: #007acc;', reserv);
            return [];
          })}
        </TicketInfo>
      </Box>
    </Box>
  );
};

export default User;
