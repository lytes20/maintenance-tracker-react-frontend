import reducers from '../../reducers/rootReducer';

describe('simpleReducer', () => {
  let state;
  it('returns result_of_simple_action', () => {
    state = reducers(
      { simpleReducer: {} },
      { type: 'SIMPLE_ACTION', payload: 'result_of_simple_action' },
    );
    expect(state).toEqual({ simpleReducer: { result: 'result_of_simple_action' } });
  });
});
