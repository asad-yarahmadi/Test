import React from 'react';

import Text  from './Text';
import Label from './Label';
import MapInput from './Inputs/MapInput';

class HouseHoldInfo extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(attribute, value) {

    const     interview  = this.props.interview;
    interview[attribute] = value;

    this.props.updateInterview(interview);

    fetch(`http://localhost:3000/${this.props.email}` , {
      headers: {"Content-Type": "application/json"},
      method : 'PUT',
      body   : JSON.stringify(interview)
    });

  }

  render() {

    return (
      <div>
        <Text title="determine your home location :"/>
        <form >
          <Label title="click on your house"/>
          <MapInput name="HouseHoldInfo" value={this.props.interview.domicile} onChange={this.handleChange}/> 
        </form>
      </div>
    
    );

  }

}

export default HouseHoldInfo;
