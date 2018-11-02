import React from 'react';
import PropTypes from 'prop-types';
import 'regenerator-runtime/runtime';

import ColorsRow from './ColorsRow';

const axios = require('axios');
const _ = require('lodash');

class ColorsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidUpdate(prevProps) {
    const { ids } = this.props;
    if (ids !== prevProps.ids) {
      this.getImageLinks(ids);
    }
  }

  async getImageLinks(ids) {
    const imageLinks = [];
    const shoeInformation = [];
    for (let i = 0; i < ids.length; i += 1) {
      const promise = axios.get(`/shoe/:${ids[i]}`);
      promise
        .then(res => res.data[0].image)
        .then(image => imageLinks.push(image));
      shoeInformation.push(promise);
    }
    await Promise.all(shoeInformation);
    const newState = {};
    newState.images = _.chunk(imageLinks, 5);
    this.setState(newState);
  }

  render() {
    const { images } = this.state;
    return (
      <div className="shoe_colors_grid">
        {images.map((row, i) => <ColorsRow key={`row_${i + 1}`} images={row} row={i.toString()} />)}
      </div>
    );
  }
}


ColorsGrid.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string),
};

ColorsGrid.defaultProps = {
  ids: ['no colors'],
};


export default ColorsGrid;
