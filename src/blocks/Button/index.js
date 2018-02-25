import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className="Button" onClick={props.buttonClick}>
      {props.text}
    </button>
  );
};

export default Button;