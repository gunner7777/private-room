import React from 'react';
import PropTypes from 'prop-types';

const PlanItem = props => {
  return (
    <div>
      <p><span>props.status</span> <span>props.date</span> <span>props.text</span></p>
    </div>
  );
}

PlanItem.propTypes = {
  
}

export default PlanItem;