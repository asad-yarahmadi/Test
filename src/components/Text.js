import React from 'react';

function Text(props) {
  const {title} = props
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );

}

export default Text;