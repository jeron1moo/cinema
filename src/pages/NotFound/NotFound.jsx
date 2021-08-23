import { Box } from '@material-ui/core';
import React from 'react';
import Typography from '../../components/Typography';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box className={classes.notFound}>
      <Typography bold>Page not found</Typography>
    </Box>
  );
};

export default NotFound;
