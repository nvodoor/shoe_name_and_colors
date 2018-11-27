import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rand from './randShoe';

require('./styles.css');

ReactDOM.hydrate(
  <App shoeID={rand} />,
  document.getElementById('colors-container'),
);
