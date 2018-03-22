import React from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
// import Select from '../../../blocks/Select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const ContractPlanEditor = (props) => {
  const planForm = props.plan.map(p => {
    return (
      <div className="planBlock" data-planid={p.id_plan}>
        <InputText
          inputLabelLink="pName"
          labelText="Документ"
          dopClass="inputPlanWorkname"
          inpValue={p.workname}
        />
        <DayPickerInput
          className="planDate"
          value={p.date}
        />
        <p><input type="checkbox" value={p.status} />Статус готовности</p>
      </div>
    );
  });

  return (
    <div>
      {planForm}
      <Button
        text="Сохранить"
        buttonClick={props.updatePlan} />
    </div>
  );
}

export default ContractPlanEditor;