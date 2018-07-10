import React from 'react';
import './Title.css';

const Title = (props) => {
  return (
    <h3 className="Title">
      {props.children}
    </h3>
  );
};

export default Title;