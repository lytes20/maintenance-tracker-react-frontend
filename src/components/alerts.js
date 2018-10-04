import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/alert.css';

class Alerts extends Component {
  state = {};

  render() {
    const { alertType, title, message } = this.props;
    const alertStyles = [styles.alert, alertType].join(' ');

    return (
      <div className={alertStyles}>
        <center>
          <small>
            <strong>{title}</strong>
            {message}
          </small>
        </center>
      </div>
    );
  }
}

Alerts.propTypes = {
  alertType: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};

Alerts.defaultProps = {
  alertType: '',
  title: '',
  message: '',
};

export default Alerts;
