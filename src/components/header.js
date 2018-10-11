import React, { Component } from 'react';
import styles from '../css/header.css';

class HeaderComponent extends Component {
  state = {};

  handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    window.location.replace('/login');
  };

  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
      <div className={styles.main_header}>
        <div className={styles.logo}>
          <a href="/home">
            <h1>Maintenance Tracker</h1>
          </a>
        </div>

        <div className={styles.nav_wrapper}>
          <nav className={styles.main_nav_menu}>
            {isLoggedIn ? (
              <ul>
                <li>
                  <a href="#" onClick={this.handleLogOut}>Log Out</a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="/login">Log In</a>
                </li>
                <li>
                  <a href="/signup">Sign Up</a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
