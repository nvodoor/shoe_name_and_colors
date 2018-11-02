import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './App';

const ColorsRow = ({ images, row, curShoe }) => (
  <div className="color_row" id={`row_${row}`}>
    {images.map((image, i) => (
      <div role="presentation" className={`shoe_color_option col_${i} ${curShoe === i ? 'curShoe' : ''}`} key={`row_${i + 1}`}>
        <img src={image[1]} alt="Not found" className={`shoe_color_image ${curShoe === i ? 'curShoe_img' : ''}`} />
      </div>
    ))}
  </div>
);

ColorsRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  row: PropTypes.string,
  curShoe: PropTypes.number,
};

ColorsRow.defaultProps = {
  images: [['none', 'none']],
  row: '0',
  curShoe: -1,
};

export default ColorsRow;
