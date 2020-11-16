import React from 'react'
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Tests for GifExpertApp component', () => {
    

    test('should compare snapshot with component', () => {
            const categories = ['Love', 'God'];
            const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('GifGrid').length).toBe( categories.length );
    });
    
});
