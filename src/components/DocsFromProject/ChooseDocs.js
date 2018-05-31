import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ChooseDocs = props => {
  const choose = props.choosenDocs.map((doc, index) => {
    return (
      <p
        className="DocsFromProject-Item"
        key={index}>
        <span>{doc.type}</span>
        <Link to='' className="DocsFromProject-Link" onClick={(event) => { event.preventDefault(); window.open(doc.link); }}><i className="fas fa-download"></i></Link>
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