import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
// import Select from '../../../blocks/Select';
import InputDate from '../../../blocks/InputDate';
/*import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';*/
import { addNewPlan, deletePlan } from '../../../actions';

class ContractPlanEditor extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newPlan = {
      id_plan: null,
      date: "",
      workname: "",
      status: "0"
    };

    this.props.addNewPlan(newPlan);
  }

  render() {
    const planForm = this.props.plan.map(p => {
      return (
        <div className="planBlock" data-planid={p.id_plan}>
          <span onClick={() => this.props.deletePlan(p.id_plan)}>
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
          <p><input type="checkbox" value={p.status} />Статус готовности</p>
        </div>
      );
    });

    return (
      <div>
        <span onClick={this.handleClick}>
          <i className="fas fa-plus"></i>
        </span>
        {planForm}
        <Button
          text="Сохранить"
          buttonClick={this.props.updatePlan} />
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
    addNewPlan: (newPlan) => dispatch(addNewPlan(newPlan)),
    deletePlan: (id) => dispatch(deletePlan(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractPlanEditor);