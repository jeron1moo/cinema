import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movie from '../../pages/Movie/Movie';
import Movies from '../../pages/Movies/Movies';
import Reserved from '../../pages/Reserved/Reserved';
import User from '../../pages/User/User';
import NotFound from '../../pages/NotFound/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Movies} />
      <Route path="/movie/:id" component={Movie} />\
      <Route path="/reserved/:id" component={Reserved} />
      <Route path="/user" component={User} />;
      <Route exact path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
