import { getGifs } from "../../helpers/getGifs";

describe('Test for getGifs Fetch', () => {
    
    test('should call 12 gifs', async() => {
        const gifs = await getGifs('Horse');
        expect( gifs.length ).toBe(12);
    });

    test('should call 0 gifs if no categories', async() => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    });
    
});

