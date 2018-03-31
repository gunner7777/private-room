import React, { Component } from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import InputDate from '../../../blocks/InputDate';

class ContractMainInfoAdd extends Component {
  constructor() {
    super();
  }
   render() {
     return (
      <div>
        <InputText
          inputLabelLink="contractName"
          labelText="Договор" />
        <InputDate />
        <InputText
          inputLabelLink="contractFI"
          labelText="Фамилия Имя заказчика" />
        <InputText
          inputLabelLink="contractO"
          labelText="Отчество заказчика" />
        <InputText
          inputLabelLink="contractPhone"
          labelText="Телефон" />
        <InputText
          inputLabelLink="contractComments"
          labelText="Комментарии к договору" />
        <Button
          text="Добавить"
          buttonClick={this.props.addContract} />
      </div>
     );
   }

}

export default ContractMainInfoAdd;