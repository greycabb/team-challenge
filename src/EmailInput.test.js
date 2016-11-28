import React from 'react';
import SignUpForm from './TeamSignUp';
import {EmailInput} from './EmailInput';
import {shallow} from 'enzyme';
import sinon from 'sinon';

function fakeUpdate(event){
    return null;
}

// Testing starts here
describe('<EmailInput /> component', () => {
    it('should show required error message for blank field', () => {
        const wrapper = shallow(<EmailInput value={''} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('we need to know your email address');
    })
    it('should show invalid error message for invalid input', () => {
        const wrapper = shallow(<EmailInput value={'should not work'} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('this is not a valid email address');
    })
    it('should not show any error message for valid input', () => {
        const wrapper = shallow(<EmailInput value={'should@work.com'} updateParent={fakeUpdate} />);
        expect(wrapper.children().length).toEqual(2);
    })
})



