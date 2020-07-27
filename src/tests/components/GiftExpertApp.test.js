import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GiftExpertApp from '../../components/GiftExpertApp';

describe('Test at <GiftExpertApp />', () => {
  test('Render <GiftExpertApp />', () => {
    const wrapper = shallow(<GiftExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show a list of categories', () => {
    const categories = ['One Punch', 'Dragon Ball'];
    const wrapper = shallow(<GiftExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GiftGrid').length).toBe(categories.length);
  });
});
