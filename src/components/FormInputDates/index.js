import * as React from 'react';
import InputText from '../../blocks/InputText';
import InputDate from '../../blocks/InputDate';
import Button from '../../blocks/Button';

const FormInput = () => {
  return (
    <form>
      <InputDate />
      <InputText inputLabelLink="dates-name" labelText="Name of stage" />
      <Button text="Добавить" />
    </form>
  );
};

export default FormInput;