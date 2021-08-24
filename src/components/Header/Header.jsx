import { Box, Link } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Typography from '../Typography/Typography';
import useStyles from './styles';

const available = ['/'];
const blocked = ['/404', '/nothingFound'];

const Header = ({ className }) => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const handleGoMain = (e) => {
    e.preventDefault();
    history.push('/');
  };

  return (
    <Box className={`${classes.header} ${className || ''}`}>
      <Box className={classes.headerDescription}>
        <Box className={classes.headerContent}>
          <Typography bold component="h1">
            Welcome to our cinema
          </Typography>
          <Typography component="h2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            labore.
          </Typography>
        </Box>
        {!available.includes(pathname) && !blocked.includes(pathname) && (
          <Link href="/" className={classes.link} onClick={handleGoBack}>
            Go back
          </Link>
        )}
        {blocked.includes(pathname) && (
          <Link href="/" className={classes.link} onClick={handleGoMain}>
            Go to the main page
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
