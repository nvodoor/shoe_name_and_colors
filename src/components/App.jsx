import React from 'react';
import PropTypes from 'prop-types';

import Name from './Name';
import Colors from './Colors';

// const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoeID: props.shoeID,
      name: 'Air Jordan Retro V2',
      colors: [],
      price: '$200',
      shoeType: "Men's Shoe",
    };
  }

  render() {
    const {
      name, colors, shoeID, price, shoeType,
    } = this.state;

    return (
      <div className="module">
        <div className="shoe_details">
          <div className="shoeType">{shoeType}</div>
          <div className="price">{price}</div>
          <Name name={name} shoeID={shoeID} />
        </div>
        <div className="color_grid">
          <Colors colors={colors} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  shoeID: PropTypes.string,
};

App.defaultProps = {
  shoeID: '310805-408',
};

export default App;
