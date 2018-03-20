import React from 'react';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';

const ContractDocsEditor = (props) => {
  const docsForm = props.docs.map((doc) => {
    return (
      <div className="docBlock" data-docid={doc.id_doc}>
        <p>Тип документа</p>
        <Select
          selectOption = {props.options}
          selectName="contractDocs" />
        <InputText
          inputLabelLink="docName"
          labelText="Документ"
          dopClass="inputDocsName"
          inpValue={doc.type} />
        <InputText
          inputLabelLink="docLink"
          labelText="Ссылка на документ"
          dopClass="inputDocsLink"
          inpValue={doc.link} />
      </div>
    )
  });

  return (
    <div>
    {docsForm}
    <Button
      text="Сохранить"
      buttonClick={props.updateDocs} />
    </div>
  );
}

export default ContractDocsEditor;