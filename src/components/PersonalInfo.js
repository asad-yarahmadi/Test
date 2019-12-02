import React from 'react';

import Text  from './Text';
import IntegerInput from './Inputs/IntegerInput'
import StringInput from './Inputs/StringInput';
import Label from './Label';
import RadioInput from './Inputs/RadioInput';
import SelectionInput from './Inputs/SelectionInput';

class Personne extends React.Component {

  constructor(props) {
    super(props);
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
        <Text title="Personal Information :"/>

        <form >

          <Label title="Name"/>
          <StringInput name="Name" value={this.props.interview.nom} onChange={this.handleChange}/> <br/>

          <Label title="Age"/>
          <IntegerInput name="Age" value={this.props.interview.age} onChange={this.handleChange}/> <br/>

          <RadioInput 
          title="Sex" name="sex" value={this.props.interview.sexe} 
          choix1="H" value1="H" 
          choix2="F" value2="F"
          onChange={this.handleChange}/>

          <SelectionInput 
          title="Occupation "name="occupation" value={this.props.interview.occupation} 
          options={[
            {value: 'Job', label: 'Job'},
            {value: 'Student', label: 'Student'},
            {value: 'Unemployment', label: 'Unemployment'}]} 

          onChange={this.handleChange}/>

          <RadioInput 
          title="Employing of Public Transport" value={this.props.interview.TC} name="TC" 
          choix1="Yes" value1="yes"
          choix2="No" value2="no" 
          onChange={this.handleChange}/>

          <RadioInput 
          title="Condition of driving license" name="permis" value={this.props.interview.permis} 
          choix1="Oui" value1="oui" 
          choix2="Non" value2="non" 
          onChange={this.handleChange}/>

          <RadioInput 
          title="Having vehicle" name="Vehicle" value={this.props.interview.auto} 
          choix1="yes" value1="yes" 
          choix2="No" value2="no" 
          onChange={this.handleChange}/>

        </form>
      </div>
    
    );

  }

}

export default Personne;
