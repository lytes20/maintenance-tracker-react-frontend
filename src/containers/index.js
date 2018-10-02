import React, { Component } from 'react';

import HeaderComponent from '../components/header';
import LandingComponent from '../components/landing';
import styles from '../css/indexContainer.css';

export class MT extends Component {
  state = {};

  render() {
    return (
      <div className={styles.pageWrap}>
        <HeaderComponent />
        <LandingComponent />
      </div>
    );
  }
}

export default MT;
