import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import ContractMainInfoEditor from '../../../components/Contracts/ContractMainInfoEditor';
import ContractDocsEditor from '../../../components/Contracts/ContractDocsEditor';
import ContractPlanEditor from '../../../components/Contracts/ContractPlanEditor';
import ContractPaysEditor from '../../../components/Contracts/ContractPaysEditor';
import InputText from '../../../blocks/InputText';
import Select from '../../../blocks/Select';
import InputFile from '../../../blocks/InputFile';
import Button from '../../../blocks/Button';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import 'moment/locale/ru';
import { getContract, updateMainInfo, updateDocs, updatePlan, updatePayments } from '../../../actions';


import EditorMenu from '../../../components/EditorMenu';
import EditorBlock from '../../../components/EditorBlock';

class ContractEditor extends Component {
    constructor(props) {
      super(props);
      console.log("con props", props);
      //const p = props.id
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
      //this.props.fetchData();
      //console.log("this.props", this.props.idC);
    }
    
    render() {
     // console.log(this.props.isLoading);
     //console.log("this.props", this.props.idC);
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }
      const { name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments, workers } = this.props.contract;
        console.log(name);
        return (
          <div>
            <EditorMenu />
            <EditorBlock />
            
          </div>
        );
    }
  }
  
  
  const mapStateToProps = (state) => {
    return {
      contract: state.contract.contract,
      isLoading: state.contract.isLoading,
      selectOpt: state.contract.selectOpt
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (id) => dispatch(getContract(id)),
      updateMInfo: (data) => dispatch(updateMainInfo(data)),
      updateDocs: (data) => dispatch(updateDocs(data)),
      updatePlan: (data) => dispatch(updatePlan(data)),
      updatePayments: (data) => dispatch(updatePayments(data))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractEditor);