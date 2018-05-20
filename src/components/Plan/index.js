import React from 'react';
import './Plan.css';

const Plan = (props) => {
  //const stageStatusIcon = isComplete ? <p><span><i className="fas fa-check"></i></span><span>Оплачено</span></p> : <p><span><i className="far fa-hourglass"></i></span><span>Ожидается оплата</span></p>;
  return (
    <div className='Container'>
      <p><span>C</span> <span>24.04.2018</span> <span>Just do it 1</span></p>
      <p><span>C</span> <span>25.04.2018</span> <span>Just do it 2</span></p>
      <p><span>N</span> <span>26.04.2018</span> <span>Just do it 3</span></p>
      <p><span>N</span> <span>27.04.2018</span> <span>Just do it 4</span></p>
      <p><span>N</span> <span>28.04.2018</span> <span>Just do it 5</span></p>
    </div>
  );
}

export default Plan;