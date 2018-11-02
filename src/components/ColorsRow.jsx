import React from 'react';
import PropTypes from 'prop-types';

const ColorsRow = ({ images, row }) => (
  <div className="color_row" id={`row_${row}`}>
    {images.map((image, i) => (
      <div className={`shoe_color_option col_${i}`} key={`row_${i + 1}`}>
        <img src={image} alt="Not found" className="shoe_color_image" />
      </div>
    ))}
  </div>
);

ColorsRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  row: PropTypes.string,
};

ColorsRow.defaultProps = {
  images: [],
  row: '0',
};

export default ColorsRow;
