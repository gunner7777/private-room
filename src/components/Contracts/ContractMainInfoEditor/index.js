import React from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import InputDate from '../../../blocks/InputDate';

const ContractMainInfoEditor = (props) => {
  return (
    <div>
      <h4>Общая информация</h4>
      <InputText inputLabelLink="contractName" labelText="Договор" inpValue={props.name}/>
      <InputDate 
        eventDate={props.date}
      />
      <InputText inputLabelLink="contractFI" labelText="Фамилия Имя заказчика" inpValue={props.fi_zakaz}/>
      <InputText inputLabelLink="contractO" labelText="Отчество заказчика" inpValue={props.o_zakaz}/>
      <InputText inputLabelLink="contractPhone" labelText="Телефон" inpValue={props.phone}/>
      <InputText inputLabelLink="contractComments" labelText="Комментарии к договору" inpValue={props.comments}/>
      <Button text="Сохранить" buttonClick={props.updateMainInfo} />
    </div>
  );
}

export default ContractMainInfoEditor;