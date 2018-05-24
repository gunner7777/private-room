import React from 'react';
import PropTypes from 'prop-types';

const TypesOfDocs = props => {
  const types = props.types.map((type, index) => {
    return (
      <p
        key={index}
        data-type={type}
        onClick={props.clickDoc}>
        {type}
      </p>
    )
  });
  return (
    <div>
      {types}
    </div>
  )
}

TypesOfDocs.propTypes = {
  
}

export default TypesOfDocs;