import React from 'react';
import {PasswordConfirmationInput} from './PasswordInput';
import {shallow} from 'enzyme';
import sinon from 'sinon';

function fakeUpdate(event){
    return null;
}

// Start tests
describe('<PasswordConfirmationInput /> component', () => {
    it('should show that a blank password doesnt match the users pw', () => {
        const wrapper = shallow(<PasswordConfirmationInput value={""} password={"goDawgs!"} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual("passwords don't match");
    });
    it('should show that a missmatched password doesnt match the users pw', () => {
        const wrapper = shallow(<PasswordConfirmationInput value={"GodAwgs!"} password={"goDawgs!"} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual("passwords don't match");
    });
    it('should show that a correct password matches the users pw', () => {
        const wrapper = shallow(<PasswordConfirmationInput value={"goDawgs!"} password={"goDawgs!"} updateParent={fakeUpdate} />);
        expect(wrapper.children().length).toEqual(2);
    });
    
})