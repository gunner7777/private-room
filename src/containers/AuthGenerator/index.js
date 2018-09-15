import React, { Component } from 'react';
import shortid from 'shortid';
import AuthBlock from '../../components/AuthBlock';
import Button from '../../blocks/Button';


class AuthGenerator extends Component {
  render() {
    return (
      <div>
        <p>Сгенерированные данные для авторизации:</p>
        <p>Логин: {shortid.generate().substr(0,8)}</p>
        <p>Пароль: {shortid.generate().substr(0,8)}</p>
        <Button
          text="Применить"
          buttonClick='' />
        <AuthBlock />
      </div>
    );
  }
}

export default AuthGenerator;
