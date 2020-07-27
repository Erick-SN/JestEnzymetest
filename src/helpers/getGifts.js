export const getGifts = async (category) => {
  const URL = 'https://api.giphy.com/v1/gifs/search';
  const API_KEY = 'fFmwjk1IDmIueZ2xHfiary0AhPgCDACs';
  const response = await fetch(
    `${URL}?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`,
  ).then((res) => res.json());
  const { data } = response;
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
