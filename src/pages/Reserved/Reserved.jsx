import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Places from '../../components/Places';
import TicketInfo from '../../components/TicketInfo';
import Typography from '../../components/Typography';
import { useActions } from '../../hooks/useActions';
import useStyles from './styles';

const Reserved = ({ match }) => {
  const classes = useStyles();
  const { getMovie, setTitle } = useActions();
  const [data, setData] = useState();
  useEffect(async () => {
    const s = await getMovie(match.params.id);
    setData(s);
  }, []);

  if (!data) {
    return <CircularProgress />;
  }

  if (data.Response === 'False') {
    return <Redirect to="/nothingFound" />;
  }

  const { Title } = data;

  const handleClick = () => {
    setTitle(match.params.id, Title);
  };

  return (
    <Box className={classes.reserved}>
      <Typography className={classes.reservedTitle} bold>
        Choose your place
      </Typography>
      <Places id={match.params.id} />
      <TicketInfo
        add
        title={Title}
        id={match.params.id}
        titleTickets="Tickets amount"
        notTicket
        onClick={() => handleClick()}
      />
    </Box>
  );
};

export default Reserved;
