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
const mockAxios = require('../../__mocks__/axios');

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

  it('should correctly update state on getImageLinks function call', async () => {
    window.axios = mockAxios;
    const instance = wrapper1.instance();
    expect(wrapper1.state('images').length).toBe(0);
    await instance.getImageLinks('AV1200-001');
    expect(wrapper1.state('images').length).toBe(1);
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
