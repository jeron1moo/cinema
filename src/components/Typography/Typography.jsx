import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const MovieTypography = ({ variant, component, children, className, bold }) => {
  const classes = useStyles();

  return (
    <Typography
      variant={variant}
      component={component}
      className={`${classes.typography}  ${bold && classes.bold}  ${
        className || ''
      }`}
    >
      {children}
    </Typography>
  );
};

export default MovieTypography;
