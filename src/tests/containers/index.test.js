import React from 'react';
import { mount } from 'enzyme';

import { MT } from '../../containers/index';

let wrapper;

beforeEach(() => {
  wrapper = mount(<MT />);
});

describe('<MT /> component', () => {
  it('renders two <MaintenanceTracker /> components', () => {
    expect(wrapper.find('MaintenanceTracker').length).toBe(2);
  });

  it('renders button with text testing', () => {
    const testingButton = wrapper.find('button');
    expect(testingButton.text()).toBe('Testing');
  });
});
