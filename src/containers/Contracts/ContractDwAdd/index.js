import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputText from '../../../blocks/InputText';
import Checkbox from '../../../blocks/Checkbox';
import Button from '../../../blocks/Button';
import Select from '../../../blocks/Select';
import { saveDwToStore, getAllWorkers } from '../../../actions';


class ContractDwAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      dw: []
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.saveDw = this.saveDw.bind(this);
  }

  handleClickAdd() {
    const newDw = {
      id_block: this.state.counter,
      id_dw: null,
      id_worker: "",
      main_worker: ""
    };

    this.setState({
      counter: this.state.counter + 1,
      dw: this.state.dw.concat(newDw)
    });
  }

  handleClickDelete(id) {
    this.setState({
      dw: this.state.dw.filter(w => {
        if(w.id_block !== id)
          return w;
      })
    });
  }

  saveDw() {
    const dwArr = [];
    const dwBlock = document.querySelectorAll('.dwBlock');
    for(const item of dwBlock) {
      dwArr.push({
        id_worker: item.querySelector('.selectWorker').value,
        main_worker: item.querySelector('.isMainWorker').checked ? "1" : "0"
      })
    }
    this.props.saveDwToStore(dwArr);
  }

  componentDidMount() {
    this.props.getAllWorkers();
  }

  render() {
    if(this.props.workersIsLoading === true) {
      return <p>Идет загрузка</p>
    }

    const dwForm = this.props.workers;
    return (
      <div>
        <span onClick={this.handleClickAdd}>
          <i className="fas fa-plus"></i>
        </span>
        <div className="dwArea">
          {dwForm}
        </div>
        <Button
          text="Сохранить"
          buttonClick={this.saveDw} />
      </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    newContract: state.newContract.newContract,
    workers: state.workers.workers,
    workersIsLoading: state.workers.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllWorkers: () => dispatch(getAllWorkers()),
    saveDwToStore: (data) => dispatch(saveDwToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDwAdd);