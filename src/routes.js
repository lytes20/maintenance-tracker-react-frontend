import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MT from './containers/index';
import LoginComponent from './components/login';
import SignupComponent from './components/signup';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MT} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/signup" exact component={SignupComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default (routes);
