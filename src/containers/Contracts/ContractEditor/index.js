import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <div>
            <InputText inputLabelLink="payName" labelText="Документ" inpValue={pay.workname}/>
          </div>
        );
      });

        return (
          <div>
            <h4>Общая информация</h4>
            <InputText inputLabelLink="contractName" labelText="Договор" inpValue={name}/>
            <InputText inputLabelLink="contractDate" labelText="Дата" inpValue={date}/>
            <InputText inputLabelLink="contractFI" labelText="Фамилия Имя заказчика" inpValue={fi_zakaz}/>
            <InputText inputLabelLink="contractO" labelText="Отчество заказчика" inpValue={o_zakaz}/>
            <InputText inputLabelLink="contractPhone" labelText="Телефон" inpValue={phone}/>
            <InputText inputLabelLink="contractComments" labelText="Комментарии к договору" inpValue={comments}/>
            <Button text="Сохранить" buttonClick={this.handleClick} />
            <hr/>

            {docsForm}
            <hr/>

            {planList}
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