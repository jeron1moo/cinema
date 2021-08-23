import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movie from '../../pages/Movie/Movie';
import Movies from '../../pages/Movies/Movies';
import Reserved from '../../pages/Reserved/Reserved';
import User from '../../pages/User/User';
import NotFound from '../../pages/NotFound/NotFound';
import NothingFound from '../../pages/NothingFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route exact path="/movie/:id" component={Movie} />
      <Route exact path="/reserved/:id" component={Reserved} />
      <Route exact path="/user" component={User} />
      <Route path="/404" component={NotFound} />
      <Route path="/nothingFound" component={NothingFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
};

export default Routes;
