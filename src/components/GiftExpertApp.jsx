import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';
const GiftExpertApp = ({ defaultCategory = [] }) => {
  const [categories, setCategories] = useState(defaultCategory);

  return (
    <>
      <h2>My app</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
