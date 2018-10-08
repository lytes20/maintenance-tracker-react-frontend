import React from 'react';
import { shallow } from 'enzyme';

import EmptyRequestComponent from '../../components/emptyRequests';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<EmptyRequestComponent />);
});

describe('EmptyRequestComponent', () => {
  it('', () => {
    console.log(wrapper.instance());
  });
});
