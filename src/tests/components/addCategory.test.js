import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Test at <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('Render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change inputValue', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('should not execute the submit function', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call Setcategories and clear  input fields', () => {
    const value = 'Hello World';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
