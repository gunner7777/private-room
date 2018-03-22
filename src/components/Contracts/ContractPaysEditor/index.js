import React from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
// import Select from '../../../blocks/Select';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

const ContractPaysEditor = (props) => {
  const paymentsList = props.payments.map(pay => {
    return (
      <div className="payBlock" data-payid={pay.id_pay}>
        <InputText
          inputLabelLink="payName"
          labelText="Документ"
          dopClass="payStageName"
          inpValue={pay.stage_payment}
        />
        <InputText
          inputLabelLink="paySumma"
          labelText="Документ"
          dopClass="paySumma"
          inpValue={pay.summa}
        />
        <p><input type="checkbox" value={pay.status} />Статус готовности</p>
      </div>
    );
  });

  return (
    <div>
      {paymentsList}
      <Button
        text="Сохранить"
        buttonClick={props.updatePays} />
    </div>
  );
}

export default ContractPaysEditor;
