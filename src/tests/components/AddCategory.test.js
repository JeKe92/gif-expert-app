import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Tests for Add Categories component', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should change by using the text input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});
    });

    test('should not call the setCategories function', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('should call the function and clear the inputValue', () => {
        wrapper.find('input').simulate('change', {target:{value: 'Hola Mundo'}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value')).toBe('');
    });
    
});
