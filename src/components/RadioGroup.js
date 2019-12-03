import React from 'react';

class RadioInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { label, options } = this.props;
    return (
      <div>
        <label>{label} :</label>
        {options.map((option) => (
          <div>
            <input type='radio' value={option} onChange={this.handleChange} />
            <span>{option}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioInput;

{
  /* <input
          type='radio'
          name={this.props.name}
          value={this.props.value1}
          onChange={this.handleChange}
        />
        {this.props.choix1}
        <input
          type='radio'
          name={this.props.name}
          value={this.props.value2}
          onChange={this.handleChange}
        />
        {this.props.choix2} */
}
