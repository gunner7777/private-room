import * as React from 'react';
import InputText from '../../blocks/InputText';
import Button from '../../blocks/Button';

const FormFIO = () => {
  return (
    <form action="">
      <InputText inputLabelLink="dogovor" labelText="Dogovor" />
      <InputText inputLabelLink="lastname" labelText="Lastname" />
      <InputText inputLabelLink="firstname" labelText="Firstname" />
      <Button text="Добавить" />
    </form>
  );
};

export default FormFIO;