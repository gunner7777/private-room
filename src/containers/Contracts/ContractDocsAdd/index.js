import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { saveDocsToStore } from '../../../actions';

class ContractDocsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      docs: []
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.saveDocs = this.saveDocs.bind(this);
  }
  
  handleClickAdd() {
    const newDoc = {
      id_block: this.state.counter,
      id_doc: null,
      type: "",
      link: ""
    };

    this.setState({
      counter: this.state.counter + 1,
      docs: this.state.docs.concat(newDoc)
    });
  }
  
  handleClickDelete(id) {
    this.setState({
      docs: this.state.docs.filter(doc => {
        if(doc.id_block !== id)
          return doc;
      })
    });
  }

  saveDocs() {
    // ref react!
    // собрать массив
    const docBlock = document.querySelectorAll('.docBlock');
    for(const item in docBlock) {
      console.log(item);
    }
    //console.log(docBlock);
  }

  render() {
    
    const docsForm = (Object.keys(this.state.docs).length == 0) ? "" : (
      this.state.docs.map((doc) => {
        return (
        <div className="docBlock" key={doc.id_block} data-blockid={doc.id_block}>
          <span onClick={() => this.handleClickDelete(doc.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Тип документа</p>
          <Select
            selectOption = {this.props.options}
            selectName="contractDocs"
            selValue={doc.type} />
          <InputFile />
        </div>);
      }));

    return (
      <div>
        <span onClick={this.handleClickAdd}>
          <i className="fas fa-plus"></i>
        </span>
        <div className="docsArea">
          {docsForm}
        </div>
      <Button
        text="Сохранить"
        buttonClick={this.saveDocs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    options: state.contract.selectOpt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDocsToStore: (data) => dispatch(saveDocsToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsAdd);