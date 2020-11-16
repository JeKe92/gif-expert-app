import React from 'react';
import { shallow } from "enzyme";

import {GifGridItem} from "../../components/GifGridItem";

describe('Tests for GridGifItem', () => {
    const title = 'My title';
    const url = 'https://localhost:3000/img/my-img.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);
    test('should show <GifGridItem />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the title in the p tag', () => {
        const figcaption = wrapper.find('figcaption');
        expect( figcaption.text() ).toBe( title );
    });

    test('should have the alt as the title and src as the url for img tag', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );
    });
    
    test('figure should have the card class', () => {
        const figure = wrapper.find('figure');
        expect(figure.prop('className')).toContain('gifs-card');
    });
    
    
    
});
