import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import LandingComponent from '../components/landing';

export class MT extends Component {
  state = {};

  render() {
    return (
      <div id="page-wrap">
        <HeaderComponent />
        <LandingComponent />
      </div>
    );
  }
}

export default MT;
