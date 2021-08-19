import { Box } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import Button from '../Button';
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
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita,
            labore.
          </Typography>
        </Box>
        {pathname !== '/404' && pathname !== '/' && (
          <Button className={classes.link} onClick={() => history.goBack()}>
            Go back
          </Button>
        )}
        {pathname === '/404' && (
          <Button className={classes.link} onClick={() => history.push('/')}>
            Go to the main page
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
