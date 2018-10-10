import React from 'react';
import { shallow } from 'enzyme';

import CreateNewRequestComponent from '../../components/createNewRequest';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CreateNewRequestComponent />);
});

describe('CreateNewRequestComponent', () => {
  it('renders two input elements', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });

  it('calls onChangeHandler when a value is entered on title input', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onChangeHandler');
    wrapper.instance().forceUpdate();
    const requestTitle = wrapper.find('input[name="requestTitle"]');
    requestTitle.simulate('change', {
      target: { value: 'some new Request', name: 'requestTitle' },
    });
    expect(spy).toHaveBeenCalled();
  });

  it('calls handleRequestSubmission on submission', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleRequestSubmission');
    wrapper.instance().forceUpdate();
    const createRequestForm = wrapper.find('form');
    createRequestForm.simulate('submit', { preventDefault: () => {} });
    expect(spy).toHaveBeenCalled();
  });
});
