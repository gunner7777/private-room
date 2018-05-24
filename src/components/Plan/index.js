import React from 'react';
import Title from '../Title';
import './PlanItem';
import './Plan.css';
import PlanItem from './PlanItem';

const Plan = (props) => {
  /*const planList = props.plan.map((p, index) => {
    return (
      <PlanItem 
        keyNum={index}
        planItem={p}
      />
    )
  });*/
  
  return (
    
    <div className='Container'>
      <Title>План работ</Title>
      <p><span>C</span> <span>24.04.2018</span> <span>Just do it 1</span></p>
      <p><span>C</span> <span>25.04.2018</span> <span>Just do it 2</span></p>
      <p><span>N</span> <span>26.04.2018</span> <span>Just do it 3</span></p>
      <p><span>N</span> <span>27.04.2018</span> <span>Just do it 4</span></p>
      <p><span>N</span> <span>28.04.2018</span> <span>Just do it 5</span></p>
      {/*{planList}*/}
    </div>
  );
}

export default Plan;