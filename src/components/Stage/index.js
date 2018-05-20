import React from 'react';
import './Stage.css';

/*
название этапа
сумма
выполнен?
*/

const Stage = (props) => {
  const {stageName, sum, isComplete} = props;
  const stageStatusIcon = isComplete 
    ? <p className='Stage-Status Stage-Status_Complete'><span><i className="fas fa-check"></i></span>&nbsp;<span>Оплачено</span></p>
    : <p className='Stage-Status Stage-Status_Wait'><span><i className="far fa-hourglass"></i></span>&nbsp;<span>Ожидается оплата</span></p>;
  return (
    <div className={'Stage ' + (isComplete && 'Stage_Active')}>
      {stageName}
      {stageStatusIcon}
      <p>{sum}</p>
    </div>
  );
};

export default Stage;