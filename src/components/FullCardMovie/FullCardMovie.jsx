import {
  CardMedia,
  Card,
  CardContent,
  CircularProgress,
  Box,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <Card className={`${classes.card} ${className || ''}`}>
      <CardMedia className={classes.card_media} image={Poster} title={Title}>
        <Box className={classes.movie}>
          <Typography className={classes.movie_title}>{Title}</Typography>
          <Link to={`/reserved/${id}`}>
            <Button>Buy a ticket</Button>
          </Link>
        </Box>
        <Box className={classes.metarate}>
          <Typography className={classes.metascore}>
            Metascore: {Metascore}
          </Typography>
          <Typography className={classes.rating}>
            Imdb rating: {imdbRating}
          </Typography>
        </Box>
      </CardMedia>
      <CardContent className={classes.card_content}>
        <Box className={classes.infodescription}>
          <Typography>Description: </Typography>
          <Typography className={classes.movie_description}>{Plot}</Typography>
          <Box className={classes.infobox}>
            <Typography className={classes.infobox_text}>
              Country: {Country}
            </Typography>
            <Typography className={classes.infobox_text}>
              Awards: {Awards}
            </Typography>
            <Typography className={classes.infobox_text}>
              Actors: {Actors}
            </Typography>
            <Typography className={classes.infobox_text}>
              Year: {Year}
            </Typography>
            <Typography className={classes.infobox_text}>
              Director: {Director}
            </Typography>
            <Typography className={classes.infobox_text}>
              Genre: {Genre}
            </Typography>
            <Typography className={classes.infobox_text}>
              Language: {Language}
            </Typography>
            <Typography className={classes.infobox_text}>
              Box office: {BoxOffice}
            </Typography>
            <Typography className={classes.infobox_text}>
              Release: {Released}
            </Typography>
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
