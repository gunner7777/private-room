import React from 'react';
import PropTypes from 'prop-types';

const TypesOfDocs = props => {
  const types = props.types.map((type, index) => {
    return (
      <p
        className="DocsFromProject-Item"
        key={index}
        data-type={type}
        onClick={props.clickDoc}>
        {type}
      </p>
    )
  });
  return (
    <div className="DocsFromProject-Column">
      {types}
    </div>
  )
}

TypesOfDocs.propTypes = {
  
}

export default TypesOfDocs;