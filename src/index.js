import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.scss';
import MT from './containers/index';

ReactDOM.render(
  <Provider store={configureStore()}>
    <MT />
  </Provider>,
  document.getElementById('root'),
);
