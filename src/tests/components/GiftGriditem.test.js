import React from 'react';
import GiftGridItem from '../../components/GiftGridItem';
import { shallow } from 'enzyme';
describe('Test at <GiftGridItem />', () => {
  const title = 'image';
  const url = 'https://image.com';
  const wrapper = shallow(<GiftGridItem title={title} url={url} />);
  test('Component render', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('title at p', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });
  test('Image must be equal to URL', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(url);
    expect(image.prop('alt')).toBe(title);
  });
});
