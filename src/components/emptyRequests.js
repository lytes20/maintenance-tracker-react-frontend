import React from 'react';

import styles from '../css/home.css';
import plusicon from '../images/plus.png';

const EmptyRequestComponent = () => {
  return (
    <div>
      <div className={styles.create_newrequest_wrapper}>
        <p>Create new maintenance, repair request</p>
        <a href="create-new-request">
          <img src={plusicon} alt="plus" />
        </a>
      </div>
      <h1>You do not have any requests yet</h1>
    </div>
  );
};

export default EmptyRequestComponent;
