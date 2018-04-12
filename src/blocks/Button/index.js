import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  return (
    <button className={`Button ${props.uploaded}`} onClick={props.buttonClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;