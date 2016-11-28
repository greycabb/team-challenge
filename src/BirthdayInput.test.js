import React from 'react';
import {BirthdayInput} from './BirthdayInput';
import {shallow} from 'enzyme';
import sinon from 'sinon';


function fakeUpdate(event){
    return null;
}


describe('<BirthdayInput /> component', () => {
    it('should show missing input error message for blank field', () => {
        const wrapper = shallow(<BirthdayInput value={''} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('we need to know your birthdate');
    })
    it('should show invalid error message for invalid birthdate', () => {
        const wrapper = shallow(<BirthdayInput value={'010101001'} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('that isn\'t a valid date');
    })
    it('should show error message if the person is not at least 13 years old based on inputted birthdate', () => {
        const wrapper = shallow(<BirthdayInput value={'02/25/2015'} updateParent={fakeUpdate} />);
        expect(wrapper.find('p').text()).toEqual('sorry, you must be at least 13 to sign up');
    })
    it('should not show any error message for valid birthdate', () => {
        const wrapper = shallow(<BirthdayInput value={'06/05/1995'} updateParent={fakeUpdate} />);
        expect(wrapper.children().length).toEqual(2);
    })
})
