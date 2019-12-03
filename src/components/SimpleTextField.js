import React from 'react';

class SimpleTextField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }
  render() {
    const { value } = this.props;
    return <input type='text' value={value} onChange={this.handleChange} />;
  }
}

export default SimpleTextField;
