import React from 'react';

function Label(props) {
  const {title} = props
  return (
    <label>{title} : </label>
  );
}

export default Label;