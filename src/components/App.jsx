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
      name: 'NIKE AIR JORDAN V2',
      colors: [],
    };
  }

  render() {
    const { name } = this.state;
    const { colors } = this.state;
    const { shoeID } = this.state;
    return (
      <div className="module">
        <div className="shoe_name">
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
