import { getGifts } from '../../helpers/getGifts';
describe('Test in getGifts', () => {
  test('It must be get 10 elements', async () => {
    const gifs = await getGifts('One Punch');
    expect(gifs.length).toBe(10);
  });
  test('It must be get 10 elements', async () => {
    const gifs = await getGifts('');
    expect(gifs.length).toBe(0);
  });
});
