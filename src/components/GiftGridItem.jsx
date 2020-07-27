import React from 'react';
const GiftGridItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GiftGridItem;
