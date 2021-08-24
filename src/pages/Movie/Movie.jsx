import React from 'react';
import FullCardMovie from '../../components/FullCardMovie';

const Movie = ({ match }) => {
  return <FullCardMovie id={match.params.id} />;
};

export default Movie;
