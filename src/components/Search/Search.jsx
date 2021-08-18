import { Box, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import Button from '../Button';
import useStyles from './styles';

const MovieSearch = ({ className }) => {
  const classes = useStyles();
  const { getMovies } = useActions();
  const [value, setValue] = useState('');
  const handleClick = () => {
    getMovies(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box className={`${classes.searchField} ${className || ''}`}>
      <TextField
        label="Type to search..."
        variant="outlined"
        className={classes.search}
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleClick} className={classes.button}>
        Search
      </Button>
    </Box>
  );
};

export default MovieSearch;
