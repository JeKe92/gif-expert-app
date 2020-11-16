import React from 'react'
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchHook } from '../../hooks/useFetchHook';
jest.mock('../../hooks/useFetchHook');

describe('Tests for Gif Grid component', () => {

    const category = 'Hola mundo';

    beforeEach( () => {
        jest.clearAllMocks();
    });
    test('should show the component properly', () => {
        useFetchHook.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show the snapshot with data', () => {
        const gifs = [{
            id: 'ABC',
            url: 'http://localhost/img.jpg',
            title: 'My Title'
        },
        {
            id: '123',
            url: 'http://localhost/img.jpg',
            title: 'My Title'
        }];

        useFetchHook.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper.find('small').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});
