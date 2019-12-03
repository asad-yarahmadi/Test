import React from 'react';

class DateInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { value } = this.props;
    return <input type='time' value={value} onChange={this.handleChange} />;
  }
}

export default DateInput;
