import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GiftGrid from './GiftGrid';
const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One punch']);
  const [query, setQuery] = useState(false);
  return (
    <>
      <h2>My app</h2>
      <AddCategory setCategories={setCategories} setQuery={setQuery} />
      <hr />
      <button>Add</button>
      <ol>
        {categories.map((category) => (
          <GiftGrid category={category} query={query} setQuery={setQuery} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
