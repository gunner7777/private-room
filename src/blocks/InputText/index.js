import React from 'react';
import './InputText.css';

const InputText = (props) => {
  return (
    <div>
      <label htmlFor={props.inputLabelLink}>{props.labelText}</label><br/>
      <input type="text" id={props.inputLabelLink} className="InputField" placeholder={props.labelText} />
    </div>
  );
};

export default InputText;