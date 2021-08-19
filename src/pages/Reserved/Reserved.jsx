import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Places from '../../components/Places';
import TicketInfo from '../../components/TicketInfo';
import { useActions } from '../../hooks/useActions';
import useStyles from './styles';

const Reserved = ({ match }) => {
  const classes = useStyles();
  const { getMovie } = useActions();
  const [data, setData] = useState({});
  useEffect(async () => {
    const s = await getMovie(match.params.id);
    setData(s);
  }, []);

  if (!data) {
    return <Box>Error</Box>;
  }

  const { Title } = data;

  return (
    <Box className={classes.reserved}>
      <Typography className={classes.reservedTitle}>
        Choose your place
      </Typography>
      <Places id={match.params.id} />
      <TicketInfo title={Title} id={match.params.id} />
    </Box>
  );
};

export default Reserved;
