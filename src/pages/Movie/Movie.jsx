import { Box } from '@material-ui/core';
import React from 'react';
import FullCardMovie from '../../components/FullCardMovie';

const Movie = ({ match }) => {
  return (
    <Box>
      <FullCardMovie id={match.params.id} />
    </Box>
  );
};

export default Movie;
