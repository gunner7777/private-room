import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { addNewDoc, deleteDoc } from '../../../actions';

class ContractDocsAdd extends Component {
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
    return (
      <div>
        <span onClick={this.handleClick}>
          <i className="fas fa-plus"></i>
        </span>
        <div className="docsArea">
          234
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
    selectOpt: state.contract.selectOpt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsAdd);