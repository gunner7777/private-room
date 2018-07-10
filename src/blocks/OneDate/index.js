import React from 'react';
import './OneDate.css';

const OneDate = (props) => {
  return (
    <div className="one-date flex-block">
      <div className="one-date__date-stage">{props.dateStage}</div>
      <div className="one-date__name-stage">{props.nameStage}</div>
    </div>
  );
};

export default OneDate;