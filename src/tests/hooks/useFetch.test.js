import { useFetch } from '../../hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';
import { render } from 'enzyme';
describe('Test at useFetch (customHook)', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('category'),
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should an  image array', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('category'),
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
