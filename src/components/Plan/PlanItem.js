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
  let readyClass;
  const {date, workname, status} = props.planItem;
  if(status === 'выполнено') {
    icon = <i className='fas fa-check'></i>;
    readyClass = "PlanItem_Complete";
  } else if (status === 'ожидается') {
    icon = <i className="far fa-hourglass"></i>;
    readyClass = "PlanItem_Wait";
  } else {
    icon = <i className="fas fa-cog"></i>;
    readyClass = "PlanItem_Work";
  }
  return (
    <div>
      <p className={`PlanItem ${readyClass}`}>
        <span className="PlanItem-Date">{date}</span>
        <span className="PlanItem-StatusIcon">{icon}</span>
        <span className="PlanItem-Text">{workname}</span>
      </p>
    </div>
  );
}

PlanItem.propTypes = {
  
}

export default PlanItem;