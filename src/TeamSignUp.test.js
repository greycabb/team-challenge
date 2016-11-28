import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import SignUpForm from './TeamSignUp';

// Tests for the signup form:
// (using mount instead of shallow here)
describe('<SignUpForm /> component', () => {

    // Eliminate redundancy using a beforeEach
    var wrapper;
    var email;
    var name;
    var dob;
    var password;
    var passwordConf;

    beforeEach(() => {
        wrapper = mount(<SignUpForm />);
        email = wrapper.find('#email');
        name = wrapper.find('#name');
        dob = wrapper.find('#dob');
        password = wrapper.find('#password');
        passwordConf = wrapper.find('#passwordConf');
    });

    // Test 1: check if sign up button is disabled by default
    it('should have a disabled Sign Me Up! at the start, before any text inputs', () => {
        expect(
            wrapper.find('#submitButton').prop('disabled')
        ).toEqual(true);
    });

    // Test 2: sign up button: disabled by any input being invalid
    // (don't need to test absolutely every combination of invalid cases,
    // since that's handled by the smaller test classes)
    it('should have a disabled Sign Me Up! button when any input is invalid', () => {
        
        // Everything is valid except the age which isn't old enough
        email.simulate('change', {target:{value: 'valid@email.com'}});
        name.simulate('change', {target:{value: 'valid name'}});
        dob.simulate('change', {target:{value: '3/28/2005'}});// <- the invalid value
        password.simulate('change', {target:{value: 'password'}});
        passwordConf.simulate('change', {target:{value: 'password'}});

        // See if the submit button is disabled after entering all those values
        expect(
            wrapper.find('#submitButton').prop('disabled')
        ).toEqual(true);
    });

    // Test 3: sign up button: enabled by all inputs being valid
    it('should have an enabled Sign Me Up! button when all inputs are valid', () => {

        email.simulate('change', {target:{value: 'valid@email.com'}});
        name.simulate('change', {target:{value: 'valid name'}});
        dob.simulate('change', {target:{value: '3/28/1997'}});
        password.simulate('change', {target:{value: 'password'}});
        passwordConf.simulate('change', {target:{value: 'password'}});

        expect(
            wrapper.find('#submitButton').prop('disabled')
        ).toEqual(false);
    });

    // Test 4: reset button
    it('should reset the form to its initial, blank state when the Reset button is clicked', () => {
    
        // Simulate values to be reset with the reset button
        email.simulate('change', {target:{value: 'junk'}});
        name.simulate('change', {target:{value: 'garbage'}});
        dob.simulate('change', {target:{value: 'rubbish'}});
        password.simulate('change', {target:{value: 'trash'}});
        passwordConf.simulate('change', {target:{value: 'can'}});

        // Click reset button
        var resetButton = wrapper.find('#resetButton');
        resetButton.simulate('click');

        // Now test if the state of the wrapper after clicking is its original blank values:
        expect(
            wrapper.state()
        ).toEqual({
            email: { value: '', valid: false },
            name: { value: '', valid: false },
            dob: { value: '', valid: false },
            password: { value: '', valid: false },
            passwordConf: { value: '', valid: false }
        }
    );
    });
});