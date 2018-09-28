import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MT from './containers/index';
import LoginComponent from './components/login';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MT} />
          <Route path="/login" exact component={LoginComponent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default (routes);
