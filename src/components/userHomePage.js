import React, { Component } from 'react';
import axios from 'axios';

import HeaderComponent from './header';
import styles from '../css/home.css';
import styles2 from '../index.scss';
import plusicon from '../images/plus.png';
// import statusImage from '../images/broken_iphone.jpg';
import EmptyRequestComponent from './emptyRequests';

class UserHomePage extends Component {
  state = {
    hasRequests: false,
    requestList: [],
  };

  componentDidMount() {
    this.fetchUserRequests();
  }

  fetchUserRequests = () => {
    const token = localStorage.getItem('token');
    return axios
      .get('https://m-tracker-flask-api.herokuapp.com/api/v1/users/requests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.msg === 'You have not made any requests') {
          // Do nothing
        }
        this.setState({ hasRequests: true, requestList: response.data.requests });
      })
      .catch({
        // TODO: Handle this error
      });
  };

  whatToRender = () => {
    const { hasRequests, requestList } = this.state;
    if (hasRequests) {
      const statusStyle = [styles2.request_status, ''].join(' ');
      return (
        <div>
          <div className={styles.create_newrequest_wrapper}>
            <p>Create new maintenance, repair request</p>
            <a href="new-request">
              <img src={plusicon} alt="plus" />
            </a>
          </div>

          <div className={styles.requests_wrapper}>
            <h1>Requests</h1>
            {requestList.map((request, index) => (
              <div key={index} className={styles2.request}>
                <a href="#">
                  <div className={styles.text_container}>
                    <h2>{request.request_title}</h2>
                    <p>
                      {request.request_desc}
                    </p>
                    <div className={styles.request_status_container}>
                      <div className={statusStyle}>{request.request_status}</div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return <EmptyRequestComponent />;
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        {this.whatToRender()}
      </div>
    );
  }
}

export default UserHomePage;
