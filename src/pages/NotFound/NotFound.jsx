import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const NotFound = () => {
  const classes = useStyles();

  return <Box className={classes.notFound}>Page not found</Box>;
};

export default NotFound;
