import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import InputDate from '../../../blocks/InputDate';
import Checkbox from '../../../blocks/Checkbox';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { savePlanToStore } from '../../../actions';

class ContractDocsAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      plan: []
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.savePlan = this.savePlan.bind(this);
  }

  handleClickAdd() {
    const newPlan = {
      id_block: this.state.counter,
      id_plan: null,
      date: "",
      workname: "",
      status: ""
    };

    this.setState({
      counter: this.state.counter + 1,
      plan: this.state.plan.concat(newPlan)
    });
  }

  handleClickDelete(id) {
    this.setState({
      docs: this.state.plan.filter(p => {
        if(p.id_block !== id)
          return p;
      })
    });
  }

  savePlan() {
    const planArr = [];
    const planBlock = document.querySelectorAll('.planBlock');
    for(const item of planBlock) {
      planArr.push({
        date: item.querySelector('.DayPickerInput input').value,
        workname: item.querySelector('.inputPlanWorkname').value,
        status: item.querySelector('.planStatus').checked ? "1" : "0"
      })
    }
    this.props.savePlanToStore(planArr);
  }

  render() {
    const planForm = ((Object.keys(this.state.plan).length === 0)&&(this.props.newContract.plan !== undefined))
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
    }))
    : (this.state.plan.map(p => {
      return (
        <div className="planBlock" key={p.id_block} data-blockid={p.id_block}>
          <span onClick={() => this.props.deletePlan(p.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <InputDate 
            //eventDate={p.date}
          />
          <InputText
            inputLabelLink="pName"
            labelText="План работ"
            dopClass="inputPlanWorkname"
            //inpValue={p.workname}
          />
          <p>
            <Checkbox
              nameClass="planStatus"
              //checkValue={p.status}
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
        <div className="planArea">
          {planForm}
        </div>
      <Button
        text="Сохранить"
        buttonClick={this.savePlan} />
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
    savePlanToStore: (data) => dispatch(savePlanToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDocsAdd);