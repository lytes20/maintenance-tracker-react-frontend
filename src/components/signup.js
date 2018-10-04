import React, { Component } from 'react';
import axios from 'axios';
import styles from '../index.scss';

class SignupComponent extends Component {
  state = {
    user: {
      username: '',
      firstname: '',
      lastname: '',
      emailaddress: '',
      password: '',
      confirm_password: '',
    },
    touched: {
      username: false,
      firstname: false,
      lastname: false,
      emailaddress: false,
      password: false,
      confirm_password: false,
    },
  };

  validationHandler = inputName => {
    const { user, touched } = this.state;
    switch (inputName) {
      case 'username':
        if (user.username.length < 6 && touched.username) {
          return (
            <span className={styles.spanerrors}>
              username needs to be at least 6 characters long.
            </span>
          );
        }
        break;
      case 'firstname':
        if (user.firstname.length < 6 && touched.firstname) {
          return (
            <span className={styles.spanerrors}>
              firstname needs to be at least 6 characters long.
            </span>
          );
        }
        break;
      case 'emailaddress':
        if (!user.emailaddress.match(/\S+@\S+\.\S+/) && touched.emailaddress) {
          return <span className={styles.spanerrors}>Enter a valid emailaddress format.</span>;
        }
        break;
      case 'password':
        if (user.password.length < 8 && touched.password) {
          return <span>password needs to be at least 8 characters long.</span>;
        }
        if (user.password.match(/^[a-zA-Z0-9_]+$/) && touched.password) {
          return (
            <span className={styles.spanerrors}>
              Please include at least a number and any of these symbols in your password
              @,#,!,$,%,&,*,(,)
            </span>
          );
        }
        break;
      case 'confirm_password':
        if (user.password !== user.confirm_password && touched.confirm_password) {
          return <span>password dont match</span>;
        }
        break;
      default:
        break;
    }
    return false;
  };

  handleSigupSubmission = event => {
    event.preventDefault();
    const {
      user: { username, emailaddress, password },
    } = this.state;
    const userData = {
      username,
      email: emailaddress,
      password,
      isAdmin: false,
    };

    return axios
      .post('https://m-tracker-flask-api.herokuapp.com/api/v1/user/register', userData)
      .then(response => {
        console.log(response);
        alert('Successfuly registered');
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChangeHandler = event => {
    const { user, touched } = this.state;
    this.setState({
      user: { ...user, [event.target.name]: event.target.value },
      touched: { ...touched, [event.target.name]: true },
    });
  };

  render() {
    return (
      <div className={styles.signup_login_form}>
        <h1 className={styles.form_heading}>Sign Up</h1>
        <hr />
        <p>Create your account with Maintenance Tracker</p>
        <form onSubmit={this.handleSigupSubmission}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('username')}</span>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('firstname')}</span>
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('lastname')}</span>
          <input
            type="text"
            name="emailaddress"
            placeholder="Email Address"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('emailaddress')}</span>

          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('password')}</span>

          <input
            type="text"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={this.onChangeHandler}
          />
          <span className={styles.spanerrors}>{this.validationHandler('confirm_password')}</span>
          <input type="submit" name="signup" value="Sign Up" disabled={false} />
        </form>
      </div>
    );
  }
}

export default SignupComponent;
