import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifts';

export const useFetch = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifts(category).then((images) =>
      setState({
        data: images,
        loading: false,
      }),
    );
  }, [category]);
  return state;
};
