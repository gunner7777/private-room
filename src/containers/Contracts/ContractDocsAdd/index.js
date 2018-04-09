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
    const docArr = [];
    const docBlock = document.querySelectorAll('.docBlock');
    for(const item of docBlock) {
      docArr.push({
        type: item.querySelector('.contractDocs').value,
        link: '/contracts/' + this.props.newContract.name + '/' + item.querySelector('.InputFile-Text').innerHTML
      })
    }
    this.props.saveDocsToStore(docArr);
  }

  componentDidMount() {
    if(this.props.newContract.docs !== undefined) {
      this.setState({
        counter: this.state.counter + 1,
        docs: this.state.docs.concat(this.props.newContract.docs)
      });
      /*this.props.newContract.docs.map(doc => {
        //return(
          console.log(doc);
          this.setState({
            counter: this.state.counter + 1,
            docs: this.state.docs.concat(doc)
          })
        //);
      });*/
  }
  }

  render() {
    const docsForm = "";
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
    newContract: state.newContract.newContract
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDocsToStore: (data) => dispatch(saveDocsToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsAdd);