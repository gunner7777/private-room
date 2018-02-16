import React from 'react';
import InputText from '../../blocks/InputText';
import InputDate from '../../blocks/InputDate';
import Button from '../../blocks/Button';

const FormInput = () => {
  return (
    <React.Fragment>
    {/*<form>*/}
      <InputText inputLabelLink="number" labelText="Number of registration" />
      <InputText inputLabelLink="ip" labelText="IP" />
      <InputText inputLabelLink="address" labelText="Address" />
      <InputDate />
      <Button text="Добавить" />
    {/*</form>*/}
    </React.Fragment>
  );
};

export default FormInput;