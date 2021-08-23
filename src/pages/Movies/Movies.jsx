import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { useActions } from '../../hooks/useActions';
import useStyles from './styles';
import Typography from '../../components/Typography';

const Movies = () => {
  const classes = useStyles();
  const { getMovies } = useActions();
  const {
    movies: moviesList,
    isLoading,
    err,
  } = useSelector(({ movies }) => movies);

  useEffect(() => {
    getMovies('Star wars');
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (err) {
    return <Redirect to="nothingFound" />;
  }

  return (
    <Box className={classes.movies}>
      <Search />
      <Box className={classes.moviesList}>
        {moviesList ? (
          moviesList.map((movie) => (
            <Card key={movie.imdbID} id={movie.imdbID} />
          ))
        ) : (
          <Box>
            <Typography bold>Nothing found here</Typography>
            <Typography bold>Please try another one</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Movies;
