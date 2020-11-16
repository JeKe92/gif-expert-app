import { renderHook } from "@testing-library/react-hooks";
import {useFetchHook} from '../../hooks/useFetchHook';
describe('Tests for custom hook useFetchHook', () => {
    test('should be empty', async() => {
       const { result, waitForNextUpdate } = renderHook(() => useFetchHook('Love'));
       const { data, loading } = result.current;
       await waitForNextUpdate();
       expect( data ).toEqual([]);
       expect( loading ).toBeTruthy();
    });

    test('should be with 12 imgs', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchHook('Love'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe(12);
        expect( loading ).toBeFalsy();
     });
    
});
