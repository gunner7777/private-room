import React from 'react';
import './Stage.css';

/*
название этапа
сумма
выполнен?
*/

const Stage = (props) => {
  const {stageName, sum, isComplete} = props;
  return (
    <div className={'stage ' + (isComplete && 'stage--active')}>
      {stageName}
      <p>{sum}</p>
    </div>
  );
};

export default Stage;