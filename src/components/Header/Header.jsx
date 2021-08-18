import { Box, Link } from '@material-ui/core';
import React from 'react';
import Typography from '../Typography/Typography';
import useStyles from './styles';

const Header = ({ className, link }) => {
  const classes = useStyles();

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
        {link && (
          <Link className={classes.link} href={link.href}>
            {link.content}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Header;
