import React, { Component } from 'react';
import styles from '../css/landing.css';

class LandingComponent extends Component {
  state = {};

  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.child_landig}>
          <p className={styles.landing_intro}>Customer satisfaction is a major key</p>
          <p className={styles.landing_subintro}>
            Make a repair or maintenance request, track and view the progress of your maintenance
            request
          </p>
          <a href="/login" className={styles.get_started}>
            Get Started
          </a>
        </div>
      </div>
    );
  }
}

export default LandingComponent;
