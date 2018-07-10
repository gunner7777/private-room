import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputDate from '../../../blocks/InputDate';
import Button from '../../../blocks/Button';
import Checkbox from '../../../blocks/Checkbox';
import PlusButton from '../../../blocks/PlusButton';
import { addNewPay, deletePay } from '../../../actions';


class ContractPaysEditor extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newPay = {
      id_pay: null,
      stage_payment: "",
      summa: "",
      status: "0"
    };

    this.props.addNewPay(newPay);
  }

  render() {
    const paymentsList = this.props.payments.map(pay => {
      return (
        <div className="payBlock infoBlock" data-payid={pay.id_pay} key={pay.id_pay}>
          <span className="infoBlock-Delete" onClick={() => this.props.deletePay(pay.id_pay)}>
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
          {/*<InputText
            inputLabelLink="payName"
            labelText="Документ"
            dopClass="payStageName"
            inpValue={pay.stage_payment}
          />
          <InputText
            inputLabelLink="paySumma"
            labelText="Документ"
            dopClass="paySumma"
            inpValue={pay.summa}
          />
          <p>
            <Checkbox
              nameClass="payStatus"
              checkValue={pay.status}
            />
            Статус готовности
          </p>*/}
        </div>
      );
    });

    return (
      <div className="FormFills-Outer">
        <div className="FormFills">
          <h4 className="Title_h4">Платежи</h4>
          {/*<span onClick={this.handleClick}>
            <i className="fas fa-plus"></i>
          </span>*/}
          <PlusButton addClick={this.handleClick} />
          {paymentsList}
          <Button
            text="Сохранить"
            buttonClick={this.props.updatePays} />
        </div>
      </div>
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
    addNewPay: (newPay) => dispatch(addNewPay(newPay)),
    deletePay: (id) => dispatch(deletePay(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractPaysEditor);