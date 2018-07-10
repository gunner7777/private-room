import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import InputDate from '../../../blocks/InputDate';
import Checkbox from '../../../blocks/Checkbox';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { savePaymentsToStore, setLastCompleteChapter } from '../../../actions';

class ContractPaymentsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      payments: []
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.savePay = this.savePay.bind(this);
  }

  handleClickAdd() {
    const newPay = {
      id_block: this.state.counter,
      id_pay: null,
      date: "",
      stage_payment: "",
      summa: "",
      status: ""
    };

    this.setState({
      counter: this.state.counter + 1,
      payments: this.state.payments.concat(newPay)
    });
  }

  handleClickDelete(id) {
    this.setState({
      payments: this.state.payments.filter(pay => {
        if(pay.id_block !== id)
          return pay;
      })
    });
  }

  savePay() {
    const payArr = [];
    const payBlock = document.querySelectorAll('.payBlock');
    for(const item of payBlock) {
      if(item.querySelector('.inputStagePayment').value === "") {
        continue;
      }
      payArr.push({
        date: item.querySelector('.DayPickerInput input').value,
        stage_payment: item.querySelector('.inputStagePayment').value,
        summa: item.querySelector('.inputSumma').value,
        status: item.querySelector('.payStatus').checked ? "1" : "0"
      })
    }
    this.props.savePaymentsToStore(payArr);
    this.props.setLastCompleteChapter("PAYS");
  }

  componentDidMount() {
    if(this.props.newContract.payments !== undefined) {
      let count = this.state.counter;
      const arr = this.props.newContract.payments.map(pay => {
        count += 1;
        return {
            id_block: count-1,
            ...pay
        };

      });
    
      console.log('arr', arr);
      this.setState({
        counter: count,
        payments: this.state.payments.concat(arr)
      });
    }
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  render() {
    if(this.props.newContract.plan === undefined) {
      return <Redirect to="/allContracts" />
    }

    /*const planForm = ((Object.keys(this.state.plan).length === 0)&&(this.props.newContract.plan !== undefined))
    ? (this.props.newContract.plan.map(p => {
      return (
        <div className="planBlock" key={p.id_block} data-blockid={p.id_block}>
          <span onClick={() => this.props.deletePlan(p.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <InputDate 
            eventDate={p.date}
          />
          <InputText
            inputLabelLink="pName"
            labelText="План работ"
            dopClass="inputPlanWorkname"
            inpValue={p.workname}
          />
          <p>
            <Checkbox
              nameClass="planStatus"
              checkValue={p.status}
            />
            Статус готовности
          </p>
        </div>
      );
    }))*/
    const payForm = (this.state.payments.map(pay => {
      return (
        <div className="payBlock" key={pay.id_block} data-blockid={pay.id_block}>
          <span onClick={() => this.handleClickDelete(pay.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <InputText
            inputLabelLink="payStage"
            labelText="Этап оплаты"
            dopClass="inputStagePayment"
            inpValue={pay.stage_payment}
          />
          <InputDate 
            eventDate={pay.date}
          />
          <InputText
            inputLabelLink="paySumma"
            labelText="Сумма"
            dopClass="inputSumma"
            inpValue={pay.summa}
          />
          <p>
            <Checkbox
              nameClass="payStatus"
              checkValue={pay.status}
            />
            Статус готовности
          </p>
        </div>
      );
    }));

    return (
      <div>
        <span onClick={this.handleClickAdd}>
          <i className="fas fa-plus"></i>
        </span>
        <div className="payArea">
          {payForm}
        </div>
      <Button
        text="Сохранить"
        buttonClick={this.savePay} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //options: state.contract.selectOpt,
    newContract: state.newContract.newContract
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    savePaymentsToStore: (data) => dispatch(savePaymentsToStore(data)),
    setLastCompleteChapter: (tag) => dispatch(setLastCompleteChapter(tag))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContractPaymentsAdd));