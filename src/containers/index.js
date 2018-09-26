import React, { Component } from 'react';
import { connect } from 'react-redux';

import MaintenanceTracker from '../components/index';
import simpleAction from '../actions/simpleAction';

export class MT extends Component {
  state = {};
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <MaintenanceTracker />
        <MaintenanceTracker />
        <button onClick={this.props.simpleAction}>Testing</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MT);
