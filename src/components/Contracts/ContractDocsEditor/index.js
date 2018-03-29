import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { addNewDoc, deleteDoc } from '../../../actions';

class ContractDocsEditor extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const newDoc = {
      id_doc: null,
      type: "",
      link: ""
    };

    this.props.addNewDoc(newDoc);
  }
  
  render() {
    const docsForm = this.props.docs.map((doc) => {
      return (
        <div className="docBlock" data-docid={doc.id_doc} key={doc.id_doc}>
          <span onClick={() => this.props.deleteDoc(doc.id_doc)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Тип документа</p>
          <Select
            selectOption = {this.props.options}
            selectName="contractDocs"
            selValue={doc.type} />
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
        <span onClick={this.handleClick}>
          <i className="fas fa-plus"></i>
        </span>
        <div className="docsArea">
          {docsForm}
        </div>
      <Button
        text="Сохранить"
        buttonClick={this.props.updateDocs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //contract: state.contract.contract,
    selectOpt: state.contract.selectOpt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDoc: (newDoc) => dispatch(addNewDoc(newDoc)),
    deleteDoc: (id) => dispatch(deleteDoc(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsEditor);