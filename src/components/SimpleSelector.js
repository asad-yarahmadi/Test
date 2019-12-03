import React from 'react';
import Select from 'react-select';

class EmailSelector extends React.Component {
  constructor() {
    super();
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(item) {
    const { onChange } = this.props;
    onChange(item.value);
  }
  render() {
    const { items, label } = this.props;
    return (
      <div>
        <label> {label} </label>
        <Select options={items} onChange={this.onHandleChange} />
      </div>
    );
  }
}

export default EmailSelector;
