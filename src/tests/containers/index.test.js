import React from 'react';
import { mount } from 'enzyme';

import { MT } from '../../containers/index';

let wrapper;

beforeEach(() => {
  wrapper = mount(<MT />);
});

describe('<MT /> component', () => {
  it('renders one <HeaderComponent />', () => {
    expect(wrapper.find('HeaderComponent').length).toBe(1);
  });

  it('renders one <LandingComponent />', () => {
    expect(wrapper.find('LandingComponent').length).toBe(1);
  });
});
