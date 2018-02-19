import React from 'react';
import InputText from '../../blocks/InputText';
import InputDate from '../../blocks/InputDate';
import Select from '../../blocks/Select';
import InputFile from '../../blocks/InputFile';

const DogovorInfo = () => {
  return (
      <div>
        <InputText inputLabelLink="customerDogovor" labelText="Договор" />
        <InputText inputLabelLink="customerFI" labelText="Фамилия Имя заказчика" />
        <InputText inputLabelLink="customerO" labelText="Отчество" />
        <InputText inputLabelLink="customerPhone" labelText="Телефон" />
        <InputDate />
        <p>Выберите менеджера ответственного за проект</p>
        <Select />
        <p>Upload documents</p>
        <InputFile withSelect="1" />
        <p>Платежи</p>
        <InputText inputLabelLink="paymentStage" labelText="Stage" />
        <InputText inputLabelLink="paymentSumma" labelText="Summa" />
        <InputText inputLabelLink="paymentStage" labelText="Stage" />
        <InputText inputLabelLink="paymentSumma" labelText="Summa" />
      </div>
  )
};

export default DogovorInfo;