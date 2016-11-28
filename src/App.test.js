import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import App from './App';

// Tests for the app (since the success alert is on the app, not the signupform):
describe('<App /> component', () => {

  var wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  // Test 1: clicking Sign Up when the button is enabled
  it('should show the success message if Sign Up is clicked while it is enabled', () => {
    
    var form = wrapper.find('form');

    var email = form.find('#email');
    var name = form.find('#name');
    var dob = form.find('#dob');
    var password = form.find('#password');
    var passwordConf = form.find('#passwordConf');

    // These are valid inputs
    email.simulate('change', { target: { value: 'valid@email.com' } });
    name.simulate('change', { target: { value: 'valid name' } });
    dob.simulate('change', { target: { value: '3/28/1997' } });
    password.simulate('change', { target: { value: 'password' } });
    passwordConf.simulate('change', { target: { value: 'password' } });

    // Click the submit button
    var submitButton = form.find('#submitButton');
    submitButton.simulate('submit');

    // If there is 1 (and only 1) success alert, pass the test
    var alertShown = (wrapper.find('.alert-success').length == 1);
    expect(alertShown).toEqual(true);
  });

});