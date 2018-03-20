import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContractMainInfoEditor from '../../../components/Contracts/ContractMainInfoEditor';
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
import { getContract } from '../../../actions';


class ContractEditor extends Component {
    constructor(props) {
      super(props);
  
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
      this.props.fetchData(this.props.match.params.id);
    }
    
    handleClick() {
      console.log("dfdfdf");
    }

    render() {
      if(this.props.isLoading) {
        return <p>Loading data</p>;
      }
      console.log(this.props.contract);
      const {id_dog, name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments} = this.props.contract;

      const docsForm = docs.map((doc) => {
        return (
          <div>
            <p>Должность сотрудника</p>
            <Select selectOption = {this.props.selectOpt} selectName="contractDocs" />
            <InputText inputLabelLink="docName" labelText="Документ" inpValue={doc.type}/>
            <InputText inputLabelLink="docLink" labelText="Ссылка на документ" inpValue={doc.link}/>
          </div>
        )
      });

      const planList = plan.map(p => {
        return (
          <div>
            <InputText inputLabelLink="pName" labelText="Документ" inpValue={p.workname}/>
            <DayPickerInput
              value={p.date}
            />
            <p>{p.status}</p>
          </div>
        )
      });

      const paymentsList = payments.map(pay => {
        return (
          <div data-id={pay.id_pay}>
            <InputText inputLabelLink="payName" labelText="Документ" inpValue={pay.stage_payment}/>
            <InputText inputLabelLink="paySumma" labelText="Документ" inpValue={pay.summa}/>
            <p>{pay.status}</p>
          </div>
        );
      });

        return (
          <div>
            <ContractMainInfoEditor
              name={name}
              date={date}
              fi_zakaz={fi_zakaz}
              o_zakaz={o_zakaz}
              phone={phone}
              comments={comments}
              updateMainInfo={this.handleClick}
            />
            <hr/>

            {docsForm}
            <hr/>

            {planList}
            <hr/>

            {paymentsList}
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
      fetchData: (id) => dispatch(getContract(id))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContractEditor);