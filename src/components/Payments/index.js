import React from 'react';
import PropTypes from 'prop-types';
import Stage from '../Stage';
import Title from '../Title';
import './Payments.css';

const Payments = props => {
  let sum = 0;
  const payList = props.payments.map((pay) => {
    sum += +pay.summa;
    return (
      <Stage
        key={pay.id_pay}
        stageName={pay.stage_payment}
        sum={pay.summa}
        isComplete={pay.status}
      />
    );
  });
  return (
    <div className='Container ComponentBlock'>
      <Title>Оплата</Title>
      <div className='Payments'>
        <h4 className='Payments-Title'>Сумма по договору</h4>
        <p className='Payments-Sum'>{sum} р.</p>
      </div>

      <div className='flexblock flexblock_center Payments-Stage'>
        {/*<Stage 
          stageName = "Stage 1"
          sum="200000"
          isComplete={true}
        />
        <Stage 
          stageName = "Stage 2"
          sum="500000"
          isComplete={true}
        />
        <Stage 
          stageName = "Stage 3"
          sum="100000"
          isComplete={false}
        />
        <Stage 
          stageName = "Stage 4"
          sum="300000"
          isComplete={false}
        />
        <Stage 
          stageName = "Stage 5"
          sum="300000"
          isComplete={false}
        />
        <Stage 
          stageName = "Stage 6"
          sum="300000"
          isComplete={false}
        />
        <Stage 
          stageName = "Stage 7"
          sum="300000"
          isComplete={false}
        />
        <Stage 
          stageName = "Stage 8"
          sum="300000"
          isComplete={false}
        />*/}
        {payList}
      </div>
    </div>
  );
}

Payments.propTypes = {
  
}

export default Payments;