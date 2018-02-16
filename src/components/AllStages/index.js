import React from 'react';
import Stage from '../../blocks/Stage';
import Title from '../../blocks/Title';
import './AllStages.css';

const AllStages = () => {
  return (
    <div className="wrapper">
      <Title>Payments</Title>
      <Stage stageName="First" activeClass={true} />
      <Stage stageName="Second" />
    </div>
  );
};

export default AllStages;