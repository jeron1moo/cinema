import Button from '@material-ui/core/Button';
import React from 'react';
import useStyles from './styles';

const MovieButton = ({ children, onClick, dark, className }) => {
  const classes = useStyles();

  return (
    <Button
      className={`${classes.button} ${(dark && classes.dark) || ''} ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MovieButton;
