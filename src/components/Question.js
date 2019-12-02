import React from 'react';
import Text from './Text';
import Label  from './Label';
import IntegerInput  from './Inputs/IntegerInput';
import Movement from './Movement';
import ButtonMovement from './Button';

class Question extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(attribute, value) {
    const interview  = this.props.interview;
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
        <Text title="Informatio movement :"/>
        <Label title="Number of movement ?"/>
        <IntegerInput name="nomberofMovement" value={this.props.interview.nbDeplacements} onChange={this.handleChange}/>
        <Movement updateInterview={this.props.updateInterview} email={this.props.email} interview={this.props.interview}/>
        <ButtonMovement updateInterview={this.props.updateInterview} email={this.props.email} interview={this.props.interview}/>
      </div>
    );
  }
}

export default Question;