import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MT from './containers/index';
import LoginComponent from './components/login';
import SignupComponent from './components/signup';
import UserHomePage from './components/userHomePage';
import NewRequestComponent from './components/newRequest';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MT} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/signup" exact component={SignupComponent} />
          <Route path="/home" exact component={UserHomePage} />
          <Route path="/new-request" exact component={NewRequestComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default (routes);
