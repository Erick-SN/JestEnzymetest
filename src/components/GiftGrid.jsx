import React, { useState, useEffect } from 'react';
import GiftGridItem from './GiftGridItem';

const Giftgrid = ({ category, query, setQuery }) => {
  const [images, setImages] = useState([]);

  const getGifts = async () => {
    const URL = 'https://api.giphy.com/v1/gifs/search';
    const API_KEY = 'fFmwjk1IDmIueZ2xHfiary0AhPgCDACs';
    const response = await fetch(
      `${URL}?q=Rick+and+Morty&limit=10&api_key=${API_KEY}`,
    ).then((res) => res.json());
    const { data } = response;
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    setImages(gifs);
  };

  useEffect(() => {
    if (query) {
      getGifts();
      setQuery(false);
    }
  }, []);

  return (
    <>
      <h1>{category}</h1>

      {images.map((img) => (
        <GiftGridItem key={img.id} {...img}>
          img.title
        </GiftGridItem>
      ))}
    </>
  );
};

export default Giftgrid;
