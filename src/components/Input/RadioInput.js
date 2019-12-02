import React from 'react';

class RadioInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {onChange} = this.props
    onChange(e.target.name, e.target.value);
  }

  render() {

    return (
        <div>
          <label htmlFor={this.props.name}>
            {this.props.title} :
          </label>
          <input type="radio" name={this.props.name} value={this.props.value1} onChange={this.handleChange}/>{this.props.choix1}
          <input type="radio" name={this.props.name} value={this.props.value2} onChange={this.handleChange}/>{this.props.choix2}
        </div>
    );

  }

}

export default RadioInput;