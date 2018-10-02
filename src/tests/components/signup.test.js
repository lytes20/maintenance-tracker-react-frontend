import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import SignupComponent from '../../components/signup';

let wrapper;

describe('SignupComponent', () => {
  wrapper = mount(
    <BrowserRouter>
      <SignupComponent />
    </BrowserRouter>,
  );
  it('SignupComponent component is rendered', () => {
    const signupComponent = wrapper.find('SignupComponent');
    expect(signupComponent.instance()).toBeInstanceOf(SignupComponent);
  });

  describe('validationHandler', () => {
    wrapper = mount(
      <BrowserRouter>
        <SignupComponent />
      </BrowserRouter>,
    );
    const signupComponent = wrapper.find('SignupComponent');

    it('handles username input validation', () => {
      const usernameInput = signupComponent
        .find('form')
        .find('input')
        .at(0);
      usernameInput.instance().value = 'test';
      usernameInput.simulate('change');
      const validationInstance = signupComponent.instance().validationHandler('username');
      expect(validationInstance).toBeTruthy();
    });

    it('handles firstname input validation', () => {
      const firstnameInput = signupComponent
        .find('form')
        .find('input')
        .at(1);
      firstnameInput.instance().value = 'test';
      firstnameInput.simulate('change');
      const validationInstance = signupComponent.instance().validationHandler('firstname');
      expect(validationInstance).toBeTruthy();
    });

    it('handles emailaddress input validation', () => {
      const emailaddressInput = signupComponent
        .find('form')
        .find('input')
        .at(3);
      emailaddressInput.instance().value = 'test';
      emailaddressInput.simulate('change');
      const validationInstance = signupComponent.instance().validationHandler('emailaddress');
      expect(validationInstance).toBeTruthy();
    });

    describe('Password validation', () => {
      const passwordInput = signupComponent
        .find('form')
        .find('input')
        .at(4);
      it('handles short password input validation', () => {
        passwordInput.instance().value = 'test';
        passwordInput.simulate('change');
        const validationInstance = signupComponent.instance().validationHandler('password');
        expect(validationInstance).toBeTruthy();
      });

      it('handles lack of characters in password input validation', () => {
        passwordInput.instance().value = 'testpassword';
        passwordInput.simulate('change');
        const validationInstance = signupComponent.instance().validationHandler('password');
        expect(validationInstance).toBeTruthy();
      });
    });
  });

  // describe('handleSigupSubmission', () => {
  //   it()
  // });
});
