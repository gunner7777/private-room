import React from 'react';
import './PlusButton.css';

const PlusButton = (props) => {
  return (
    <div className="PlusButton">
      <span onClick={props.addClick}>
        <i className="fas fa-plus PlusButton-Icon" title="Добавить"></i>
      </span>
    </div>
  )
}

export default PlusButton;