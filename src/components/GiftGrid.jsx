import React from 'react';
import PropTypes from 'prop-types';
import GiftGridItem from './GiftGridItem';
import { useFetch } from '../hooks/useFetch';

const GiftGrid = ({ category }) => {
  const { data: images, loading } = useFetch(category);
  return (
    <>
      <h3 className='animate_animated animate_fadeIn'>{category}</h3>
      {loading && <p className='animate_animated animate_flash'>Loading...</p>}
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

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
export default GiftGrid;
