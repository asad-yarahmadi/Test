import React from 'react';
import Select from 'react-select'

class SelectionInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this)
    
  }


  
  handleChange(e) {
    const {onChange} = this.props
    onChange(this.props.name, e.value);
  }
  render() {
    const {name, title, options, value} = this.props
    return (
      <div>
        <label htmlFor={name}> {title} : </label>
        <Select  name={name} options={options} value={value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default SelectionInput;






