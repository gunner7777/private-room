import React from 'react';
import './Stage.css';

/*
название этапа
сумма
выполнен?
*/

const Stage = (props) => {
  const {stageName, sum, isComplete} = props;
  let statusPay = isComplete === "0" ? false : true;
  const stageStatusIcon = statusPay
    ? <p className='Stage-Status Stage-Status_Complete'><span><i className="fas fa-check"></i></span>&nbsp;<span>Оплачено</span></p>
    : <p className='Stage-Status Stage-Status_Wait'><span><i className="far fa-hourglass"></i></span>&nbsp;<span>Ожидается оплата</span></p>;
  return (
    <div className={'Stage ' + (statusPay && 'Stage_Active')}>
      <div className='Stage-Info'>
        {stageName}
        {stageStatusIcon}
        <p>{sum}</p>
      </div>
    </div>
  );
};

export default Stage;