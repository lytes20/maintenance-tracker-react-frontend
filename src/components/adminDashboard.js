import React, { Component } from 'react';
import axios from 'axios';

import styles from '../css/home.css';
import styles2 from '../index.scss';
import adminStyles from '../css/adminDashboard.css';

class AdminDashboard extends Component {
  state = {
    requestList: [],
  };

  componentDidMount() {
    this.fetchUserRequests();
  }

  fetchUserRequests = () => {
    const token = localStorage.getItem('token');
    return axios
      .get('https://m-tracker-flask-api.herokuapp.com/api/v1/requests', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        if (response.data.msg === 'You have not made any requests') {
          // Do nothing
        }
        this.setState({ requestList: response.data.requests });
      })
      .catch({
        // TODO: Handle this error
      });
  };

  render() {
    const { requestList } = this.state;
    const statusStyle = [styles2.request_status, ''].join(' ');
    return (
      <div className={styles.requests_wrapper}>
        <h1>Requests</h1>
        {requestList.map((request, index) => (
          <div key={index} className={styles2.request}>
            <a href="#">
              <div className={styles.text_container}>
                <h2>{request.request_title}</h2>
                <p>{request.request_desc}</p>
                <div className={styles.request_status_container}>
                  <div className={statusStyle}>{request.request_status}</div>
                </div>
                <button className={adminStyles.approveButton}>Approve</button>
                <button className={adminStyles.rejectButton}>Reject</button>
                <button className={adminStyles.resolveButton}>Resolve</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default AdminDashboard;
