import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const id = require('./randShoe');

ReactDOM.render(
  <App shoeID={id} />,
  document.getElementById('root'),
);
