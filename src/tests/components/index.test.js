import React from 'react';
import {mount} from 'enzyme';
import MaintenanceTracker from '../../components';

it('renders without crashing', () => {
  const wrapper = mount(<MaintenanceTracker />);
  expect(wrapper.find("h1").length).toBe(1);
});

