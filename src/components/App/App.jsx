import { Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes';
import theme from '../../theme/theme';
import Header from '../Header';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box className={classes.appWrapper}>
          <Routes />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
