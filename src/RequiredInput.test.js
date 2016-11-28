import React from 'react';
import {RequiredInput} from './RequiredInput';
import {shallow} from 'enzyme';
import sinon from 'sinon';

function fakeUpdate(event){
    return null;
}

// Start tests
describe('<RequiredInput /> component', () => {
    it('should show that input is required for the name to be valid', () => {
        const wrapper = shallow(<RequiredInput id="name" field="name" type="text"
          label="Name" placeholder="your name"
          errorMessage="we need to know your name"
          value={''} 
          updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('we need to know your name');
    });
    it('should show that input is required for the password to be valid', () => {
        const wrapper = shallow(<RequiredInput id="password" field="password" type="text"
          label="Password" placeholder=""
          errorMessage="your password can't be blank"
          value={''} 
          updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual("your password can't be blank");
    });
})