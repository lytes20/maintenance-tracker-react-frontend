import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/simpleAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Simple Actions', () => {
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches  ', () => {
    const expectedOutput = [{
      type: 'SIMPLE_ACTION',
      payload: 'result_of_simple_action',
    }];

    store.dispatch(actions.simpleAction());
    expect(store.getActions()).toEqual(expectedOutput);
  });
});
