import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ name }) => (
  <div className="shoe_name">
    <span>{name}</span>
  </div>
);

Name.propTypes = {
  name: PropTypes.string,
};

Name.defaultProps = {
  name: 'PLACEHOLDER NAME',
};

export default Name;
