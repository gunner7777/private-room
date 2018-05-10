import React, { PropTypes } from 'react';
import Stage from '../Stage';

const Payments = props => {
  return (
    <div>
      <div>
        <h4>Сумма</h4>
        <p>1430000 р.</p>
      </div>
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
    </div>
  );
}

Payments.propTypes = {
  
}

export default Payments;