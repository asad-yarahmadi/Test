import React from 'react';
import Movement1 from './Movement1';

class ButtonMovement extends React.Component {

  constructor() {
    super();
    this.state={etat: false}

    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({etat:true})
  }

  render() {

    return (
      <div>
        <button className ="buttonDeplacement" type="button" onClick={this.handleClick}>Ajouter un deuxième déplacement </button>
        {this.state.etat && <Movement1 updateInterview={this.props.updateInterview} email={this.props.email} interview={this.props.interview}/>}
      </div>
    );

  }
}

export default ButtonMovement;