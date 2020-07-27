import React from 'react';
import GiftGrid from '../../components/GiftGrid';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { useFetch } from '../../hooks/useFetch';
jest.mock('../../hooks/useFetch');

describe('Test at <GiftGrid/>', () => {
  const category = 'One Punch';
  test('Render <GiftGrid/> component', () => {
    useFetch.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('shoud load images', () => {
    const imgs = [
      {
        id: 'abc',
        url: 'https://cosa.jpg',
        title: 'image',
      },
    ];

    useFetch.mockReturnValue({
      data: imgs,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GiftGridItem').length).toBe(imgs.length);
  });
});
