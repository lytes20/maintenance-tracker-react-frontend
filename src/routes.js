import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MT from './containers/index';
import LoginComponent from './components/login';
import SignupComponent from './components/signup';
import UserHomePage from './components/userHomePage';
import CreateNewRequestComponent from './components/createNewRequest';
import AdminDashboard from './components/adminDashboard';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MT} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/signup" exact component={SignupComponent} />
          <Route path="/home" exact component={UserHomePage} />
          <Route path="/create-new-request" exact component={CreateNewRequestComponent} />
          <Route path="/admin" exact component={AdminDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default (routes);
