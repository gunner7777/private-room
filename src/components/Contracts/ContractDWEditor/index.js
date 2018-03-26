import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import { deleteWorker, addNewWorker } from '../../../actions';

class ContractDWEditor extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p>11</p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contract: state.contract.contract,
    selectOpt: state.contract.selectOpt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewWorker: (newWorker) => dispatch(addNewWorker(newWorker)),
    deleteWorker: (id) => dispatch(deleteWorker(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDWEditor);