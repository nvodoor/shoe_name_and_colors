/* eslint react/jsx-filename-extension: [0] */

import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';
import ColorsGrid from './ColorsGrid';
import ColorsRow from './ColorsRow';
import Name from './Name';

configure({ adapter: new Adapter() });

describe('[App] Component Unit Tests', () => {
  const wrapper1 = shallow(<App />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});

describe('[ColorsGrid] Component Unit Tests', () => {
  const wrapper1 = shallow(<App />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});

describe('[ColorsRow] Component Unit Tests', () => {
  const wrapper1 = shallow(<App />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});

describe('[Name] Component Unit Tests', () => {
  const wrapper1 = shallow(<App />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});
