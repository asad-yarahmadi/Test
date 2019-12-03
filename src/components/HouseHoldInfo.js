import React from 'react';

import Text from './Text';
import Label from './Label';
import MapBox from './MapBox';
import SimpleButton from './SimpleButton';
import { saveData } from '../services/api';

class HouseHoldInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      coordinates: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSaveClicked = this.onSaveClicked.bind(this);
  }

  handleChange(value) {
    this.setState({
      coordinates: value,
    });
  }

  onSaveClicked(e) {
    e.preventDefault();
    const { id } = this.props;
    saveData(id, {
      houseHold: this.state,
    });
  }

  render() {
    return (
      <div>
        <form>
          <Label title='Position your house on the map' />
          <MapBox onChange={this.handleChange} />
          <SimpleButton label='Save' onClick={this.onSaveClicked} />
        </form>
      </div>
    );
  }
}

export default HouseHoldInfo;
