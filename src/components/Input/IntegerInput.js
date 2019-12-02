import React from 'react';

class IntegerInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(e) {
    const {onChange} = this.props
    onChange(e.target.name, e.target.value);
  }

  render() {
    const {name, value} = this.props
    return (
      <input type="number" name={name} value={value} onChange={this.handleChange} />
    );

  }

}

export default IntegerInput;