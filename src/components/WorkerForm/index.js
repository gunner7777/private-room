import React from 'react';
import InputText from '../../blocks/InputText';
import Select from '../../blocks/Select';
import InputFile from '../../blocks/InputFile';
import Button from '../../blocks/Button';

const WorkerForm = () => {
    return (
        <React.Fragment>
            <InputText inputLabelLink="workerFI" labelText="Фамилия Имя сотрудника" />
            <p>Должность сотрудника</p>
            <Select />
            <InputText inputLabelLink="workerPhoto" labelText="Фото сотрудника" />
            <InputText inputLabelLink="workerPhone" labelText="Телефон" />
            <InputText inputLabelLink="workerMail" labelText="E-mail" />
            <Button text="Добавить" />
        </React.Fragment>
    );
}

export default WorkerForm;