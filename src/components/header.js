import React, { Component } from 'react';
import styles from '../css/header.css';

class HeaderComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <header className={styles.main_header} id="index_header">
          <div id="logo" />
          <a href="index.html">
            <h1>Maintenance Tracker</h1>
          </a>
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
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
