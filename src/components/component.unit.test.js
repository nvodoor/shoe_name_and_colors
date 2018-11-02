/* eslint react/jsx-filename-extension: [0] */

import {
  shallow, mount, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import App from './App';
import ColorsGrid from './ColorsGrid';
import ColorsRow from './ColorsRow';
import Name from './Name';

const sinon = require('sinon');

configure({ adapter: new Adapter() });

describe('[App] Component Unit Tests', () => {
  const wrapper1 = shallow(<App />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });

  it('should call componentDidMount when component is mounted', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    mount(<App shoeID="AV1200-001" />);
    expect(App.prototype.componentDidMount.callCount).toBe(1);
  });

});

describe('[ColorsGrid] Component Unit Tests', () => {
  const wrapper1 = shallow(<ColorsGrid />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });

});

describe('[ColorsRow] Component Unit Tests', () => {
  const wrapper1 = shallow(<ColorsRow />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});

describe('[Name] Component Unit Tests', () => {
  const wrapper1 = shallow(<Name />);
  it('should exist', () => {
    expect(wrapper1.exists()).toBeTruthy();
  });
});
