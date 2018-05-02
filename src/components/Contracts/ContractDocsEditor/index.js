import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { addNewDoc, deleteDoc } from '../../../actions';
import PlusButton from '../../../blocks/PlusButton';

class ContractDocsEditor extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /*componentWillReceiveProps(nextProps) {
    //console.log("next props", nextProps.file.buttonId);
    console.log("docs", this.state.docs);
    const newDocsState = this.state.docs.map(doc => {
      if(doc.id_block === nextProps.file.buttonId) {
        //doc.uploaded = true;
        doc.uploaded = nextProps.file.ok;
      } 
      return doc;
    });

    console.log(newDocsState);
    this.setState({
      docs: newDocsState
    });
  }*/
  
  handleClick() {
    console.log(this.props.docs.length);
    let nowLength = this.props.docs.length;
    if(nowLength !== 0) { 
      if(this.props.docs[this.props.docs.length-1].id_block === undefined) {
        //this.props.docs[this.props.docs.length-1].uploaded = true;
        this.props.docs[this.props.docs.length-1].id_block = this.props.docs[this.props.docs.length-1].id_doc;
      }
    }
    const currDocs = this.props.docs;
    //this.props.docs.id_block === undefined ? this.props.docs.id_block = +this.props.docs.id_doc : null;
    const newDoc = {
      id_block: currDocs.length !== 0 ? (+this.props.docs[this.props.docs.length-1].id_block + 1) : 0,
      id_doc: null,
      type: "",
      link: "",
      uploaded: false
    };

    this.props.addNewDoc(newDoc);
  }
  
  render() {
    //console.log("state file", this.props.file);
    //console.log("last docid", this.props.docs[this.props.docs.length-1].id_doc);
    const docsForm = this.props.docs.map((doc) => {
      //let isUploaded = doc.id_doc !== null ? true : false;
      if(doc.id_block === undefined) {
        doc.uploaded = true;
        doc.id_block = doc.id_doc;
      }
      if(doc.id_block === this.props.file.buttonId) {
        doc.uploaded = this.props.file.ok;
      }

      const pathArr = doc.link.split('/');
      let fileName = pathArr[pathArr.length-1];
      //console.log(fileName);
      return (
        <div className="docBlock" data-docid={doc.id_block} key={doc.id_block}>
          <span onClick={() => this.props.deleteDoc(doc.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Тип документа</p>
          <Select
            selectOption = {this.props.options}
            selectName="contractDocs"
            selValue={doc.type} />
          <InputFile 
            fName={fileName}
            inputId={doc.id_block}
            uploaded={doc.uploaded}
            dirname={this.props.contract.name}
          />
          {/*
            {doc.link !== "" ? <InputText
            inputLabelLink="docLink"
            labelText="Ссылка на документ"
            dopClass="inputDocsLink"
            inpValue={doc.link} />
            : <InputFile />}
          */}
        </div>
      )
    });

    return (
      <div>
        {/*<span onClick={this.handleClick}>
          <i className="fas fa-plus"></i>
        </span>*/}
        <PlusButton addClick={this.handleClick} />
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
    file: state.file,
    contract: state.contract.contract,
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