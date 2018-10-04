import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import styles from '../index.scss';
import HeaderComponent from './header';
import Alerts from './alerts';
import Loader from './loader';

class LoginComponent extends Component {
  state = {
    user: {
      emailaddress: '',
      password: '',
    },
    message: '',
    loading: false,
  };

  onChangeHandler = event => {
    const { user } = this.state;
    this.setState({ user: { ...user, [event.target.name]: event.target.value } });
  };

  redirectToHomePage = () => {
    console.log('I get called');
    return <Redirect to="/home" />;
  }

  handleLoginSubmission = event => {
    event.preventDefault();
    const {
      user: { emailaddress, password },
    } = this.state;
    const userData = {
      email: emailaddress,
      password,
    };
    this.setState({ loading: true });

    return axios
      .post('https://m-tracker-flask-api.herokuapp.com/api/v1/user/login', userData)
      .then(response => {
        console.log(response.data.msg.token);
        this.setState({ loading: false });
        const { history } = this.props;
        history.push('/home');
      })
      .catch(error => {
        console.log(error);
        this.setState({ message: 'invalid email/password' });
        this.setState({ loading: false });
      });
  };

  render() {
    const { message, loading } = this.state;
    return (
      <div>
        <HeaderComponent />
        <div className={styles.signup_login_form}>
          <center>{loading ? <Loader /> : null}</center>
          {message ? <Alerts message={message} alertType="alertDanger" title="Error:" /> : null}
          <h1 className={styles.form_heading}>Log in</h1>
          <hr />
          <p>Please log into your account to continue</p>
          <form onSubmit={this.handleLoginSubmission}>
            <input
              type="text"
              name="emailaddress"
              placeholder="Email Address"
              onChange={event => this.onChangeHandler(event)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              onChange={event => this.onChangeHandler(event)}
            />
            <input type="submit" value="Log in" />
            <a href="#">Forgot your password?</a>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
