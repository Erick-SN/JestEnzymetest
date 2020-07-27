import React from 'react';
import GiftGridItem from './GiftGridItem';
import { useFetch } from '../hooks/useFetch';

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetch(category);
  return (
    <>
      <h1>{category}</h1>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img}>
            img.title
          </GiftGridItem>
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
