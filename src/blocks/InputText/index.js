import React from 'react';
import './InputText.css';

const InputText = (props) => {
  return (
    <div>
      <label>{props.labelText}<br/>
      <input type="text" id={props.inputLabelLink} className="InputField" placeholder={props.labelText} />
      </label>
    </div>
  );
};

export default InputText;