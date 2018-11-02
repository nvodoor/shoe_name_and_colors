import React from 'react';
import PropTypes from 'prop-types';
import 'regenerator-runtime/runtime';

const axios = require('axios');

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
    newState.images = imageLinks;
    this.setState(newState);
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <span>{ images }</span>
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
