import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   console.log(e.target.value);
  // };

  // const isInputNumber = (e) => {
  //   const special = new RegExp('[0-9]');
  //   const ch = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  //   if (!special.test(ch)) {
  //     e.preventDefault();
  //     return;
  //   }
  // };
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // onKeyPress={isInputNumber}
        // maxLength='10'
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
