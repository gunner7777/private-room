import React from 'react';
import PropTypes from 'prop-types';
import MainWorkerOnProject from '../MainWorkerOnProject';
import DocsFromProject from '../DocsFromProject';
import Payments from '../Payments';
import Plan from '../Plan';
import WorkersProject from '../WorkersProject';

const ContractViewer = props => {
  return (
    <div>
      <p>Личный кабинет</p>
      <p>Договор № 111111</p>
      <div className='Container'>
        <DocsFromProject />
        <MainWorkerOnProject />
      </div>
      <Payments />
      <Plan />
      <WorkersProject />
    </div>
  );
}

ContractViewer.propTypes = {
  
}

export default ContractViewer;