import React, { Component } from 'react';
import axios from 'axios';

import styles from '../css/home.css';
import styles2 from '../index.scss';
import adminStyles from '../css/adminDashboard.css';
import Loader from './loader';
import HeaderComponent from './header';

class AdminDashboard extends Component {
  state = {
    requestList: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchUserRequests();
  }

  fetchUserRequests = () => {
    this.setState({ loading: true });
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
        this.setState({ requestList: response.data.requests, loading: false });
      })
      .catch({
        // TODO: Handle this error
      });
  };

  handleApprove = async requestID => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `https://m-tracker-flask-api.herokuapp.com/api/v1/requests/${requestID}/approve`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      this.fetchUserRequests();
    } catch (e) {
      // TODO: Handle error
    }
  };

  handleReject = async requestID => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `https://m-tracker-flask-api.herokuapp.com/api/v1/requests/${requestID}/reject`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      this.fetchUserRequests();
    } catch (e) {
      // TODO: Handle error
    }
  };

  handleResolve = async requestID => {
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `https://m-tracker-flask-api.herokuapp.com/api/v1/requests/${requestID}/resolve`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      this.fetchUserRequests();
    } catch (e) {
      // TODO: Handle error
    }
  };

  render() {
    const { requestList, loading } = this.state;
    const statusStyle = [styles2.request_status, ''].join(' ');
    return (
      <div>
        <HeaderComponent />
        <div className={styles.requests_wrapper}>
          <h1>Requests</h1>
          <center>{loading ? <Loader /> : null}</center>
          {requestList.map((request, index) => (
            <div key={index} className={styles2.request}>
              <a href="#">
                <div className={styles.text_container}>
                  <h2>{request.request_title}</h2>
                  <p>{request.request_desc}</p>
                  <div className={styles.request_status_container}>
                    <div className={statusStyle}>{request.request_status}</div>
                  </div>
                  <button
                    className={adminStyles.approveButton}
                    onClick={() => this.handleApprove(request.request_id)}
                  >
                    Approve
                  </button>
                  <button
                    className={adminStyles.rejectButton}
                    onClick={() => this.handleReject(request.request_id)}
                  >
                    Reject
                  </button>
                  <button
                    className={adminStyles.resolveButton}
                    onClick={() => this.handleResolve(request.request_id)}
                  >
                    Resolve
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
