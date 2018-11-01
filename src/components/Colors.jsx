import React from 'react';
import PropTypes from 'prop-types';

const Colors = ({ colors }) => (
  <div>
    <span>{ colors }</span>
  </div>
);

Colors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

Colors.defaultProps = {
  colors: ['no colors'],
};


export default Colors;
