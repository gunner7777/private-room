import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  //console.log("df", props.uplFile);
  //const uplClass = props.uplFile !== false ? "Button_uploaded" : "";
  const uplClass = ((props.uplFile === undefined)||(props.uplFile === false)) ? "" : "Button_uploaded";
  const buttonId = props.id !== undefined ? `addbutton_${props.id}` : null;
  return (
    <button
      id={buttonId}
      className={`Button ${uplClass}`}
      onClick={props.buttonClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  uploaded: PropTypes.string,
  id: PropTypes.string
};

export default Button;