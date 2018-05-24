import React from 'react';
import PropTypes from 'prop-types';
import Stage from '../Stage';
import Title from '../Title';
import './Payments.css';

const Payments = props => {
  return (
    <div className='Container'>
      <Title>Оплата</Title>
      <div className='Payments'>
        <h4 className='Payments-Title'>Сумма</h4>
        <p className='Payments-Sum'>1430000 р.</p>
      </div>

      <div className='flexblock Payments-Stage'>
        <Stage 
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
        />
      </div>
    </div>
  );
}

Payments.propTypes = {
  
}

export default Payments;