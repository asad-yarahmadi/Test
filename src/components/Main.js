import React from 'react';
import Text  from './Text';
import SelectionInput from './Inputs/SelectionInput';
import Questionnaire from './Questionnaire';

class Email extends React.Component {

  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {email: '', interview: {}};
    this.updateInterview = this.updateInterview.bind(this);
  }

  updateInterview(interview) {
    this.setState({ interview });
  }

  handleEmailChange(attribute, email) {
    event.preventDefault();
    this.setState(function(oldState) {  
      return {
        email
      };
    });
    fetch(`http://localhost:3000/${email}`, {headers: {"Content-Type": "application/json",'Accept': 'application/json'}, method:'GET'})
      .then(function(response) {
        response.json().then(function(interview) {
          this.setState({
            interview
          });
          console.log(`<Section/> L'interview de ${email} est :`, interview);
        }.bind(this));
      }.bind(this));
    alert("L'email a été sélectionné : "  + email);
  }

  render() {
    const emails = [
      {value: 'asad.yarahmadi@test.com', label: 'asad.yarahmadi@test.com'},
      {value: 'Pierre-leo@test.com', label: 'Pierre-leo@test.com'},
      ]
    return (
      <div>
        <Text title="Welcome"/>

        <form>
          {/* l'utilisateur choisi son compte via son adresse mail */}
          <SelectionInput
            title="Choisissez votre email" 
            name="email"
            options={emails}
            value={this.state.email}
            onChange={this.handleEmailChange}/>
        </form>
        {/* Quand c'est choisi, email a une valeur, on affiche questionnaire qui va contenir toutes les questions */}
        {this.state.email==='' ? " " : <Questionnaire updateInterview={this.updateInterview} email={this.state.email} interview={this.state.interview}/>} 

      </div>
    
    );

  }

}

export default Email;
