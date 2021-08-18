import {
  CardMedia,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Chip,
  Box,
} from '@material-ui/core';
import React from 'react';
import Button from '../Button';
import useStyles from './styles';
import Typography from '../Typography';

const MovieCard = ({
  className,
  data: { Title, Poster, Actors, Plot, Genre, Year, Runtime, imdbID },
}) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.card} ${className || ''}`}>
      <CardMedia className={classes.card_media} image={Poster} title={Title} />
      <CardContent className={classes.card_content}>
        <Typography className={classes.movie_title}>{Title}</Typography>
        <Typography className={classes.movie_actors}>
          {Actors || 'actor, actor'}
        </Typography>
        <Typography className={classes.movie_description}>
          {Plot || 'Description'}
        </Typography>
      </CardContent>
      <CardActionArea className={classes.card_actions}>
        <Box className={classes.movie_tags}>
          {Genre &&
            Genre.split(',').map((tag) => (
              <Chip
                clickable
                key={`${imdbID}:${tag}`}
                className={classes.movie_tag}
                label={tag.toLowerCase()}
              />
            ))}
        </Box>
        <Box className={classes.movie_additional}>
          <Typography>{Year}</Typography>
          <Typography>{Runtime}</Typography>
        </Box>
        <CardActions>
          <Button dark>More info...</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
