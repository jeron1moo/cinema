import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Search from '../../components/Search';
import { useActions } from '../../hooks/useActions';

const link = { href: '#', content: 'Go back' };

const Movies = () => {
  const { getMovies } = useActions();
  const {
    movies: moviesList,
    isLoading,
    err,
  } = useSelector(({ movies }) => movies);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (err) {
    return <Box>Error</Box>;
  }

  useEffect(() => {
    getMovies('Star wars');
  }, []);

  return (
    <Box>
      <Header link={link} />
      <Search />
      {moviesList.map((movie) => (
        <Card key={movie.imdbID} data={movie} />
      ))}
      <Button />
    </Box>
  );
};

export default Movies;
