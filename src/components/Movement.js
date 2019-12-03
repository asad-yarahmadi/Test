import React from 'react';
import Label from './Label';
import SimpleSelector from './SimpleSelector';
import SimpleTextField from './SimpleTextField';
import DateField from './DateField';
import SimpleButton from './SimpleButton';
import MapBox from './MapBox';
import { saveData } from '../services/api';

class Movement extends React.Component {
  constructor() {
    super();
    this.state = {
      movmentReason: null,
      origin: null,
      destination: null,
      arrival: '',
      departure: '',
      transportationType: '',
    };
    this.handleChangeMovment = this.handleChangeMovment.bind(this);
    this.handleChangeOrigin = this.handleChangeOrigin.bind(this);
    this.handleChangeDestination = this.handleChangeDestination.bind(this);
    this.onSaveClicked = this.onSaveClicked.bind(this);
    this.handleChangeTransportationType = this.handleChangeTransportationType.bind(
      this,
    );
  }

  handleChangeMovment(value) {
    this.setState({
      movmentReason: value,
    });
  }

  handleChangeOrigin(value) {
    this.setState({
      origin: value,
    });
  }

  handleChangeDestination(value) {
    this.setState({
      destination: value,
    });
  }

  handleChangeArrival(value) {
    this.setState({
      arrival: value,
    });
  }

  handleChangeDeparture(value) {
    this.setState({
      departure: value,
    });
  }

  handleChangeTransportationType(value) {
    this.setState({
      transportationType: value,
    });
  }

  onSaveClicked(e) {
    e.preventDefault();
    const { id } = this.props;
    saveData(id, {
      movment: this.state,
    });
  }

  render() {
    return (
      <div>
        <form>
          <SimpleSelector
            label='The reason of movement'
            items={[
              { label: 'Study', value: 'Study' },
              { label: 'Job', value: 'Job' },
            ]}
            onChange={this.handleChangeMovment}
          />

          <Label title='Select your origin place' />
          <MapBox onChange={this.handleChangeOrigin} />

          <Label title='Select your desitnation' />
          <MapBox onChange={this.handleChangeDestination} />

          <Label title='select your time arrival' />
          <DateField
            value={this.state.arrival}
            onChange={this.handleChangeArrival}
          />
          <br />
          <Label title='select your time departure' />
          <DateField
            value={this.state.departure}
            onChange={this.handleChangeDeparture}
          />
          <br />

          <SimpleSelector
            label='what kind of transportation you used?'
            items={[
              { label: 'car', value: 'car' },
              { label: 'truck', value: 'truck' },
              {
                label: 'public transportation',
                value: 'public transportation',
              },
            ]}
            onChange={this.handleChangeTransportationType}
          />
          <SimpleButton label='Save' onClick={this.onSaveClicked} />
        </form>
      </div>
    );
  }
}

export default Movement;
