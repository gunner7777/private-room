import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { redirectToMain } from '../../../modules/redirectToMain';
import { saveDocsToStore, setLastCompleteChapter } from '../../../actions';
import PlusButton from '../../../blocks/PlusButton';

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
    //console.log("next props", nextProps.file.buttonId);
    //console.log("docs", this.state.docs);
    const newDocsState = this.state.docs.map(doc => {
      if(doc.id_block === nextProps.file.buttonId) {
        //doc.uploaded = true;
        doc.uploaded = nextProps.file.ok;
      } /*else {
        doc.uploaded = false;
      }*/
      return doc;
    });

    //console.log(newDocsState);
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
    this.props.setLastCompleteChapter("DOCS");
  }

  componentDidMount() {
    // no complete prev form go to list project
    /*console.log(this.props.history);
    if(this.props.history === undefined) {
      console.log("dfdddfdf");
      return <Redirect to="/" />
    }*/
    //redirectToMain(this.props.newContract, this.props.history);

    if(this.props.newContract.docs !== undefined) {
      let count = this.state.counter;
      const arr = this.props.newContract.docs.map(doc => {
        count += 1;
        return {
            id_block: count-1,
            ...doc
        };

      });
    
      //console.log('arr', arr);
      this.setState({
        counter: count,
        docs: this.state.docs.concat(arr)
      });
    }
    /*setTimeout(() => {
      console.log(this.state);
    }, 500);*/
  }

  render() {
    //console.log("history", this.props.newContract);
    if(this.props.newContract.name === undefined) {
      return <Redirect to="/allContracts" />
    }
    //console.log("new state", this.state.docs);
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
            dirname={this.props.newContract.name}
            //resultUpload={this.getUploadedResult} 
          />
        </div>
      );
    });

    return (
      <div className="FormFills-Outer">
        <div className="FormFills">
          <h4 className="Title_h4">Документы</h4>
          {/*<span onClick={this.handleClickAdd}>
            <i className="fas fa-plus"></i>
          </span>*/}
          <PlusButton addClick={this.handleClickAdd} />
          <div className="docsArea">
            {docsForm}
          </div>
          <Button
            text="Сохранить"
            buttonClick={this.saveDocs} />
        </div>
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
    saveDocsToStore: (data) => dispatch(saveDocsToStore(data)),
    setLastCompleteChapter: (tag) => dispatch(setLastCompleteChapter(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContractDocsAdd));