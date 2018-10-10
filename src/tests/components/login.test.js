import React from 'react';
import { shallow } from 'enzyme';

import LoginComponent from '../../components/login';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<LoginComponent />);
});

describe('LoginComponent', () => {
  it('renders 3 input elements', () => {
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('email input calls onChangeHandler', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onChangeHandler');
    const email = wrapper.find('input[name="emailaddress"]');
    email.simulate('change', { target: { value: 'testemail.gmail.com', name: 'emailaddress' } });
    expect(spy).toHaveBeenCalled();
  });

  it('password input calls onChangeHandler', () => {
    const spy = jest.spyOn(wrapper.instance(), 'onChangeHandler');
    const password = wrapper.find('input[name="password"]');
    password.simulate('change', { target: { value: 'apassword', name: 'password' } });
    expect(spy).toHaveBeenCalled();
  });

  it('handleLoginSubmission', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleLoginSubmission');
    wrapper.instance().forceUpdate();
    const loginForm = wrapper.find('form');
    loginForm.simulate('submit', { preventDefault: () => {} });
    expect(spy).toHaveBeenCalled();
  });
});
