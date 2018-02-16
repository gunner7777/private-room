import React from 'react';
import './Stage.css';


const Stage = (props) => {
  return (
    <div className={'stage ' + (props.activeClass ? 'stage--active' : '')}>
      {props.stageName}
      e
    </div>
  );
};

export default Stage;