/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import ColorsShow from '../src/ColorsShow';

let consoleError;
beforeAll(() => {
  consoleError = console.error;
  console.error = msg => {
    throw new Error(msg);
  };
});

afterAll(() => {
  console.error = consoleError;
});

const colors = { a: 1, b: 2, c: 3, d: 4 };

it('should render correct number of colors', () => {
  const wrapper = shallow(<ColorsShow colors={colors} />);

  expect(wrapper.find('Box').length).toEqual(Object.keys(colors).length);
});

it('should render correct number of colors', () => {
  const wrapper = shallow(<ColorsShow colors={colors} />);

  expect(wrapper.find('Box').length).toEqual(Object.keys(colors).length);
});

it('should toggle stacked state on mouse enter / leave', () => {
  const wrapper = shallow(<ColorsShow stacked colors={colors} />);

  expect(wrapper.instance().state.stacked).toEqual(true);

  wrapper.find('Container').simulate('mouseEnter');

  expect(wrapper.instance().state.stacked).toEqual(false);

  wrapper.find('Container').simulate('mouseLeave');

  expect(wrapper.instance().state.stacked).toEqual(true);
});

it(
  'should warn when both lines and stacked props are true (in DEV mode)',
  () => {
    const fn = () => shallow(<ColorsShow stacked lines colors={colors} />);

    expect(fn).toThrowError();
  },
);
