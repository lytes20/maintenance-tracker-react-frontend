import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from '../index.scss';
import Loader from './loader';
import HeaderComponent from './header';

class CreateNewRequestComponent extends Component {
  state = {
    requestTitle: '',
    requestDescription: '',
    loading: false,
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRequestSubmission = event => {
    event.preventDefault();

    const { requestTitle, requestDescription } = this.state;
    const requestData = {
      request_title: requestTitle,
      request_description: requestDescription,
    };
    const token = localStorage.getItem('token');

    this.setState({ loading: true });

    return axios
      .post('https://m-tracker-flask-api.herokuapp.com/api/v1/users/requests', requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        this.setState({ loading: false });
        const { history } = this.props;
        history.push('/home');
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <HeaderComponent />
        <div className={styles.signup_login_form}>
          <center>{loading ? <Loader /> : null}</center>
          <h1 className={styles.form_heading}>Create a new request</h1>
          <hr />

          <form onSubmit={this.handleRequestSubmission}>
            <label htmlFor="title">
              Request title:
              <input
                id="title"
                type="text"
                name="requestTitle"
                placeholder="e.g iphone screen repair"
                onChange={this.onChangeHandler}
              />
            </label>

            {/* eslint jsx-a11y/label-has-for: 0 */}
            <label htmlFor="description">
              Request description:
              <textarea
                id="description"
                name="requestDescription"
                onChange={this.onChangeHandler}
              />
            </label>

            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

CreateNewRequestComponent.propTypes = {
  history: PropTypes.object,
};

CreateNewRequestComponent.defaultProps = {
  history: {},
};

export default CreateNewRequestComponent;
