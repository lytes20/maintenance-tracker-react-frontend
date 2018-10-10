import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';


import UserHomePage from '../../components/userHomePage';

let wrapper;

beforeEach(() => {
  moxios.install();
  wrapper = shallow(<UserHomePage />);
});

afterEach(() => {
  moxios.uninstall();
});

describe('UserHomePage', () => {
  it('', () => {});
});
