import { Box } from '@material-ui/core';
import React from 'react';
import Typography from '../../components/Typography';
import useStyles from './styles';

const NothingFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.nothingFound}>
      <Typography bold>Ooopss...</Typography>
      <Typography bold>Something went wrong</Typography>
    </Box>
  );
};

export default NothingFound;
