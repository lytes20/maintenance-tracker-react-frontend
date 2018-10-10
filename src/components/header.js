import React, { Component } from 'react';
import styles from '../css/header.css';

class HeaderComponent extends Component {
  state = {};

  render() {
    return (
      <div className={styles.main_header}>
        <div className={styles.logo}>
          <a href="/home">
            <h1>Maintenance Tracker</h1>
          </a>
        </div>

        <div className={styles.nav_wrapper}>
          <nav className={styles.main_nav_menu}>
            <ul>
              <li>
                <a href="/login">Log In</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
