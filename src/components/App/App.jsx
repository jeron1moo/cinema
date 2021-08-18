import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
