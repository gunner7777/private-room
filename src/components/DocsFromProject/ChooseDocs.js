import React from 'react';
import PropTypes from 'prop-types';

const ChooseDocs = props => {
  const choose = props.choosenDocs.map((doc, index) => {
    return (
      <p
        className="DocsFromProject-Item"
        key={index}>
        <span>{doc.type}</span>
        <a href={doc.link} className="DocsFromProject-Link"><i className="fas fa-download"></i></a>
      </p>
    );
  });
  return (
    <div className="DocsFromProject-Column">
      {choose}
    </div>
  );
}

ChooseDocs.propTypes = {
  
}

export default ChooseDocs;