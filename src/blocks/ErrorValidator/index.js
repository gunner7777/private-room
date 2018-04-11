import React from 'react';
import './errorValidator.css';

const ErrorValidator = (props) => {
  return (
    <p className="errorValidator">Поле {`${props.fieldName}`} не может быть пустым</p>
  );
}

export default ErrorValidator;