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
    this.getUploadedResult = this.getUploadedResult.bind(this);  
  }

  componentWillReceiveProps(nextProps) {
    const newDocsState = this.state.docs.map(doc => {
      if(doc.id_block === nextProps.file.buttonId) {
        doc.uploaded = true;
      }
      return doc;
    });
    this.setState({
      docs: newDocsState
    });
  }

  
  handleClickAdd() {

    const newDoc = {
      id_block: this.state.counter,
      id_doc: null,
      type: "",
      filename: "",
      link: "",
      uploaded: false
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

  getUploadedResult(bool, blockId) {
    const updDocs = this.state.docs.map(doc => {
      if(doc.id_block === blockId) {
        doc.uploaded = bool;
      }
      return doc;
    });
    this.setState({
      docs: updDocs
    });
  }

  saveDocs() {
    const docArr = [];
    const docBlock = document.querySelectorAll('.docBlock');
    for(const item of docBlock) {

// Нужно возвращать статус загрузки файла и по нему проверять добавлять ли в стейт данный файл
      let isUploaded = item.querySelector('.Button').classList.contains('Button_uploaded');
      if(!isUploaded) {
        continue;
      }



      docArr.push({
        type: item.querySelector('.contractDocs').value,
        filename: item.querySelector('.InputFile-Text').innerHTML,
        link: '/contracts/' + this.props.newContract.name + '/' + item.querySelector('.InputFile-Text').innerHTML,
        uploaded: isUploaded
      })
    }
    this.props.saveDocsToStore(docArr);
  }

  componentDidMount() {
    if(this.props.newContract.docs !== undefined) {
      let count = this.state.counter;
      const arr = this.props.newContract.docs.map(doc => {
        count += 1;
        return {
            id_block: count-1,
            ...doc
        };

      });
    
      console.log('arr', arr);
      this.setState({
        counter: count,
        docs: this.state.docs.concat(arr)
      });
    }
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  render() {
    console.log("new state", this.state);
    const docsForm = this.state.docs.map(doc => {
      return (
        <div className="docBlock" key={doc.id_block} data-blockid={doc.id_block}>
          <span onClick={() => this.handleClickDelete(doc.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Тип документа</p>
          <Select
            selectOption = {this.props.options}
            selectName="contractDocs"
            selValue={doc.type} 
          />
          <InputFile
            fName={doc.filename}
            inputId={doc.id_block}
            uploaded={doc.uploaded}
            resultUpload={this.getUploadedResult} />
        </div>
      );
    });

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
    options: state.contract.selectOpt,
    newContract: state.newContract.newContract,
    file: state.file
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDocsToStore: (data) => dispatch(saveDocsToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsAdd);