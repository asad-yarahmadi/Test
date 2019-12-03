import React from 'react';

import Text from './Text';
import NumberField from './NumberField';
import SimpleTextField from './SimpleTextField';
import Label from './Label';
import RadioGroup from './RadioGroup';
import SimpleSelector from './SimpleSelector';
import SimpleButton from './SimpleButton';
import { saveData } from '../services/api';

class Personne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: 30,
      Occupation: null,
      Sex: 'Male',
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeSex = this.handleChangeSex.bind(this);
    this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
    this.onSaveClicked = this.onSaveClicked.bind(this);
  }

  handleChangeName(value) {
    this.setState({
      Name: value,
    });
  }

  handleChangeAge(value) {
    this.setState({
      Age: value,
    });
  }

  handleChangeSex(value) {
    this.setState({
      Sex: value,
    });
  }

  handleChangeOccupation(value) {
    this.setState({
      Occupation: value,
    });
  }

  onSaveClicked(e) {
    e.preventDefault();
    const { id } = this.props;
    saveData(id, {
      personalInfo: this.state,
    });
  }

  render() {
    return (
      <div>
        <Text title='Personal Information :' />

        <form>
          <Label title='Name' />
          <SimpleTextField
            value={this.state.Name}
            onChange={this.handleChangeName}
          />{' '}
          <br />
          <Label title='Age' />
          <NumberField
            value={this.state.Age}
            onChange={this.handleChangeAge}
          />{' '}
          <br />
          <RadioGroup
            label='Sex'
            options={['Female', 'Male']}
            onChange={this.handleChangeSex}
          />
          <SimpleSelector
            label='Occupation'
            items={[
              { value: 'FullTimeJob', label: 'FullTimeJob' },
              { value: 'Student', label: 'Student' },
              { value: 'Unemployment', label: 'Unemployment' },
            ]}
            onChange={this.handleChangeOccupation}
          />
          <SimpleButton label='Save' onClick={this.onSaveClicked} />
        </form>
      </div>
    );
  }
}

export default Personne;
