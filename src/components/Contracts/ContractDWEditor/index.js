import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '../../../blocks/Checkbox';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import PlusButton from '../../../blocks/PlusButton';
import { deleteDW, addNewDW, getAllWorkers } from '../../../actions';

class ContractDWEditor extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newDw = {
      id_dw: null,
      id_worker: "",
      main_worker: "0"
    };

    this.props.addNewDW(newDw);
  }

  componentDidMount() {
    this.props.getAllWorkers();
  }

  render() {
    const workersList = this.props.dwlink.map(dw => {
      return (
        <div className="dwBlock" data-dwid={dw.id_dw} key={dw.id_dw}>
          <span onClick={() => this.props.deleteDW(dw.id_dw)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Сотрудник</p>
          <Select
            selectOption = {this.props.workersFiPost}
            selectName="contractDwName"
            selValue={dw.fi + ', ' + dw.post} />
          
          {/*<p>Должность</p>
          <Select
            selectOption = {this.props.selectPost}
            selectName="contractDwPost"
            selValue={dw.post} />*/}
          <p>
            <Checkbox
              nameClass="contractDwMain"
              checkValue={dw.main_worker}
            />
            Ответственный за проект
          </p>
        </div>
      );
    });
    return (
      <div>
        {/*<span onClick={this.handleClick}>
          <i className="fas fa-plus"></i>
        </span>*/}
        <PlusButton addClick={this.handleClick} />
        <div className="dwArea">
          {workersList}
        </div>
      <Button
        text="Сохранить"
        buttonClick={this.props.updateDwLink} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewDW: (newDw) => dispatch(addNewDW(newDw)),
    deleteDW: (id) => dispatch(deleteDW(id)),
    getAllWorkers: () => dispatch(getAllWorkers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDWEditor);