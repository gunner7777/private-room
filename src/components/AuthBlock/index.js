import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../blocks/InputText';
import Button from '../../blocks/Button';

const AuthBlock = props => {
  return (
    <div>
      <InputText
        inputLabelLink="authLogin"
        labelText="Логин"
        dopClass="inputStagePayment"
        inpValue=""
      />
      <InputText
        inputLabelLink="authPassword"
        labelText="Пароль"
        dopClass="inputStagePayment"
        inpValue=""
      />
      <InputText
        inputLabelLink="authPassword2"
        labelText="Повторите пароль"
        dopClass="inputStagePayment"
        inpValue=""
      />
      <Button
        text="Сохранить"
        buttonClick='' />
    </div>
  );
};

AuthBlock.propTypes = {
  
};

export default AuthBlock;