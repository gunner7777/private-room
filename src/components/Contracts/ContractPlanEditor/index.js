import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Button from '../../../blocks/Button';
import Checkbox from '../../../blocks/Checkbox';
import InputDate from '../../../blocks/InputDate';
import PlusButton from '../../../blocks/PlusButton';
import Select from '../../../blocks/Select';
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
    const selectStatus = ['ожидается', 'в процессе', 'выполнено'];
    const planForm = this.props.plan.map(p => {
      return (
        <div className="planBlock infoBlock" data-planid={p.id_plan}>
          <span className="infoBlock-Delete" onClick={() => this.props.deletePlan(p.id_plan)}>
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
          <p>Статус готовности</p>
          <Select
            selectOption = {selectStatus}
            selectName="planStatus"
            selValue={p.status} 
          />
          {/*<p>
            <Checkbox
              nameClass="planStatus"
              checkValue={p.status}
            />
            Статус готовности
          </p>*/}
        </div>
      );
    });

    return (
      <div className="FormFills-Outer">
        <div className="FormFills">
          <h4 className="Title_h4">План работ</h4>
          {/*<span onClick={this.handleClick}>
            <i className="fas fa-plus"></i>
          </span>*/}
          <PlusButton addClick={this.handleClick} />
          {planForm}
          <Button
            text="Сохранить"
            buttonClick={this.props.updatePlan} />
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
    addNewPlan: (newPlan) => dispatch(addNewPlan(newPlan)),
    deletePlan: (id) => dispatch(deletePlan(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractPlanEditor);