import React from 'react';
import PropTypes from 'prop-types';
import './PlanItem.css';

/*
status
  done
  wait
  work
*/

const PlanItem = props => {
  let icon;
  const {date, workname, status} = props.planItem;
  if(status === 'выполнено') {
    icon = <i className='fas fa-check'></i>;
  } else if (status === 'ожидается') {
    icon = <i className="far fa-hourglass"></i>;
  } else {
    icon = <i className="fas fa-cog"></i>;
  }
  return (
    <div>
      <p>
        <span className="PlanItem-StatusIcon">{icon}</span>
        <span className="PlanItem-Date">{date}</span>
        <span className="PlanItem-Text">{workname}</span>
      </p>
    </div>
  );
}

PlanItem.propTypes = {
  
}

export default PlanItem;