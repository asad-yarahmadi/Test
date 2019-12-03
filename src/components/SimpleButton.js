import React from 'react';

export default function SimpleButton(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
