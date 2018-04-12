import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import InputFile from '../../../blocks/InputFile';
import InputDate from '../../../blocks/InputDate';
import Checkbox from '../../../blocks/Checkbox';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { savePlanToStore } from '../../../actions';

class ContractPlanAdd extends Component {
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
      plan: this.state.plan.filter(p => {
        if(p.id_block !== id)
          return p;
      })
    });
  }

  savePlan() {
    const planArr = [];
    const planBlock = document.querySelectorAll('.planBlock');
    for(const item of planBlock) {
      if(item.querySelector('.inputPlanWorkname').value === "") {
        continue;
      }
      planArr.push({
        date: item.querySelector('.DayPickerInput input').value,
        workname: item.querySelector('.inputPlanWorkname').value,
        status: item.querySelector('.planStatus').checked ? "1" : "0"
      })
    }
    this.props.savePlanToStore(planArr);
  }

  componentDidMount() {
    if(this.props.newContract.plan !== undefined) {
      let count = this.state.counter;
      const arr = this.props.newContract.plan.map(p => {
        count += 1;
        return {
            id_block: count-1,
            ...p
        };

      });
    
      console.log('arr', arr);
      this.setState({
        counter: count,
        plan: this.state.plan.concat(arr)
      });
    }
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  render() {
    const planForm = (this.state.plan.map(p => {
      return (
        <div className="planBlock" key={p.id_block} data-blockid={p.id_block}>
          <span onClick={() => this.handleClickDelete(p.id_block)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContractPlanAdd);