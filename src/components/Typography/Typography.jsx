import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const MovieTypography = ({ variant, component, children, className }) => {
  const classes = useStyles();

  return (
    <Typography
      variant={variant}
      component={component}
      className={`${classes.typography} ${className || ''}`}
    >
      {children}
    </Typography>
  );
};

export default MovieTypography;
