import React from 'react';
import Text  from './Text';
import SelectionInput from './Inputs/SelectionInput';
import Forms from './Forms';

class Email extends React.Component {

  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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
          
        }.bind(this));
      }.bind(this));
    
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
          
          <SelectionInput
            title="Choose your email" 
            name="email"
            options={emails}
            value={this.state.email}
            onChange={this.handleEmailChange}/>
        </form>
        
        {this.state.email==='' ? " " : <Forms updateInterview={this.updateInterview} email={this.state.email} interview={this.state.interview}/>} 

      </div>
    
    );

  }

}

export default Email;
