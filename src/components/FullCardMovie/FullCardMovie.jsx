import {
  CardMedia,
  Card,
  CardContent,
  CircularProgress,
  Box,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useStyles from './styles';
import Typography from '../Typography';
import { useActions } from '../../hooks/useActions';
import Button from '../Button';

const MovieCard = ({ className, id }) => {
  const classes = useStyles();
  const { getMovie } = useActions();
  const [data, setData] = useState({});
  useEffect(async () => {
    const s = await getMovie(id);
    setData(s);
  }, []);

  const {
    Title,
    Poster,
    Plot,
    Country,
    Awards,
    Actors,
    Year,
    Director,
    Genre,
    Language,
    Released,
    BoxOffice,
    Metascore,
    imdbRating,
  } = data;

  if (!data) {
    return <CircularProgress />;
  }

  if (data.Response === 'False') {
    return <Redirect to="/nothingFound" />;
  }

  if (!Poster) {
    return <CircularProgress />;
  }

  return (
    <Card className={`${classes.card} ${className || ''}`}>
      <CardMedia className={classes.card_media} image={Poster} title={Title}>
        <Box className={classes.movie}>
          <Typography bold className={classes.movie_title}>
            {Title}
          </Typography>
          <Link to={`/reserved/${id}`}>
            <Button>Buy a ticket</Button>
          </Link>
        </Box>
        <Box className={classes.metarate}>
          <Typography>Metascore: {Metascore}</Typography>
          <Typography>Imdb rating: {imdbRating}</Typography>
        </Box>
      </CardMedia>
      <CardContent className={classes.card_content}>
        <Box className={classes.infodescription}>
          <Typography>Description: </Typography>
          <Typography className={classes.movie_description}>{Plot}</Typography>
          <Box className={classes.infobox}>
            <Typography bold>Country: {Country}</Typography>
            <Typography bold>Awards: {Awards}</Typography>
            <Typography bold>Actors: {Actors}</Typography>
            <Typography bold>Year: {Year}</Typography>
            <Typography bold>Director: {Director}</Typography>
            <Typography bold>Genre: {Genre}</Typography>
            <Typography bold>Language: {Language}</Typography>
            <Typography bold>Box office: {BoxOffice}</Typography>
            <Typography bold>Release: {Released}</Typography>
          </Box>
        </Box>
        <Box className={classes.movie_images}>
          <CardMedia className={classes.movie_image} image={Poster} />
          <CardMedia className={classes.movie_image} image={Poster} />
          <CardMedia className={classes.movie_image} image={Poster} />
          <CardMedia className={classes.movie_image} image={Poster} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
