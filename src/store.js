import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore() {
  /* eslint no-underscore-dangle: 0 */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
