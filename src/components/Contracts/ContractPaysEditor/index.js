import React from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
// import Select from '../../../blocks/Select';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

const ContractPaysEditor = (props) => {
  const paymentsList = props.payments.map(pay => {
    return (
      <div className="payBlock" data-payid={pay.id_plan}>
        <InputText inputLabelLink="payName" labelText="Документ" inpValue={pay.stage_payment}/>
        <InputText inputLabelLink="paySumma" labelText="Документ" inpValue={pay.summa}/>
        <p>{pay.status}</p>
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
