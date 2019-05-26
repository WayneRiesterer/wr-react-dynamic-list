import React from 'react';
import './Validation.css';

export default (props) => {
  const MIN_LENGTH = 5;

  let message = props.textLength < MIN_LENGTH ?
      <p className="invalid">Text Too Short</p> :
      <p className="valid">Text Long Enough</p>;

  return <div className="Validation">{message}</div>;
};