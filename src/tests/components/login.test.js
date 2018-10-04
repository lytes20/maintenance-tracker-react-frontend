import React from 'react';
import { mount } from 'enzyme';

import LoginComponent from '../../components/login';

let wrapper;

beforeEach(() => {
  wrapper = mount(<LoginComponent />);
});

describe('LoginComponent', () => {
  it('renders one <HeaderComponent />', () => {
  });
});
