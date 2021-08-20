import { Box } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Typography from '../Typography/Typography';
import useStyles from './styles';

const Header = ({ className }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Box className={`${classes.header} ${className || ''}`}>
      <Box className={classes.headerDescription}>
        <Box className={classes.headerContent}>
          <Typography className={classes.title} variant="h2" component="h2">
            Welcome to our cinema
          </Typography>
          <Typography variant="h3" component="h3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            labore.
          </Typography>
        </Box>
        {pathname !== '/404' && pathname !== '/' && (
          <Link
            href="/"
            className={classes.link}
            onClick={() => history.goBack()}
          >
            Go back
          </Link>
        )}
        {pathname === '/404' && (
          <Link
            href="/"
            className={classes.link}
            onClick={() => history.push('/')}
          >
            Go to the main page
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
