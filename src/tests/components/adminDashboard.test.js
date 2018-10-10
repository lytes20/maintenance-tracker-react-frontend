import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';

import AdminDashboard from '../../components/adminDashboard';

let wrapper;

beforeEach(() => {
  moxios.install();
  wrapper = shallow(<AdminDashboard />);
  wrapper.setState({
    requestList: [
      {
        request_desc:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
        request_id: 12958347,
        request_owner: 'gideon.bamuleseyo@gmail.com',
        request_status: 'in progress',
        request_title: 'Another new repair request',
      },
    ],
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('AdminDashboard', () => {
  it('renders 3 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('calls handleApprove function on clicking the approve button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleApprove');
    const approveButton = wrapper.find('button').at(0);
    approveButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('calls handleReject function on clicking the reject button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleReject');
    const approveButton = wrapper.find('button').at(1);
    approveButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('calls handleResolve function on clicking the reject button', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleResolve');
    const approveButton = wrapper.find('button').at(2);
    approveButton.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
