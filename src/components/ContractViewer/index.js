import React, { PropTypes } from 'react';
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
      <DocsFromProject />
      <MainWorkerOnProject />
      <Payments />
      <Plan />
      <WorkersProject />
    </div>
  );
}

ContractViewer.propTypes = {
  
}

export default ContractViewer;