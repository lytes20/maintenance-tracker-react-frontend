import React from 'react';
import { shallow } from 'enzyme';

import Alerts from '../../components/alerts';

describe('Alerts', () => {
  it('', () => {
    const wrapper = shallow(<Alerts />);
    expect(wrapper.find('small')).toHaveLength(1);
  });
});
