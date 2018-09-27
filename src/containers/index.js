import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MaintenanceTracker from '../components/index';
import * as actions from '../actions/simpleAction';
import styles from '../css/indexContainer.css';

export class MT extends Component {
  state = {};

  render() {
    const { simpleAction } = this.props;
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <MaintenanceTracker />
        <MaintenanceTracker />
        <button className={styles.myButton} onClick={simpleAction}>
          Testing
        </button>
      </div>
    );
  }
}

MT.propTypes = {
  simpleAction: PropTypes.func,
};

MT.defaultProps = {
  simpleAction: () => {},
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(actions.simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MT);
