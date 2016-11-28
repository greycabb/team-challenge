import React from 'react';
import SignUpForm from './TeamSignUp';
import {EmailInput} from './EmailInput';
import {shallow} from 'enzyme';

describe('<EmailInput /> component', () => {
    it('should show required error message for blank field', () => {
        const wrapper = shallow(<EmailInput />);
        wrapper.find('input').simulate('change', {target:{value: ''}});
        expect(wrapper.find('p').text()).toEqual('we need to know your email address');
    })
    it('should show invalid error message for invalid input', () => {

    })
    it('should not show any error message for valid input', () => {

    })
})