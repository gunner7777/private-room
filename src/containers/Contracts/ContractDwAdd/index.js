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
      main_worker: "",
      w_info: ""
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
      let info = item.querySelector('.selectWorker').value;
      let idWorker = this.props.workers.filter(worker => {
        if(info.indexOf(worker.fi) !== -1) {
          return worker;
        }
        return "";
      });

      console.log("idworker", idWorker[0]);
      dwArr.push({
        id_worker: idWorker[0].id_worker,
        main_worker: item.querySelector('.isMainWorker').checked ? "1" : "0",
        info: info
      })
    }
    this.props.saveDwToStore(dwArr);
  }

  componentDidMount() {
    this.props.getAllWorkers();
    
    if(this.props.newContract.dw !== undefined) {
      let count = this.state.counter;
      const arr = this.props.newContract.dw.map(w => {
        count += 1;
        return {
            id_block: count-1,
            ...w
        };

      });
    
      console.log('arr', arr);
      this.setState({
        counter: count,
        dw: this.state.dw.concat(arr)
      });
    }
    setTimeout(() => {
      console.log(this.state);
    }, 500);
  }

  render() {
    if(this.props.workersIsLoading === true) {
      return <p>Идет загрузка</p>
    }

    const dwForm = this.state.dw.map(w => {
      return (
        <div className="dwBlock" key={w.id_block} data-blockid={w.id_block}>
          <span onClick={() => this.handleClickDelete(w.id_block)}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <p>Сотрудник</p>
          <Select
            selectOption = {this.props.workersFiPost}
            selectName="selectWorker"
            selValue={w.info} />
          <p>
            <Checkbox
              nameClass="isMainWorker"
              checkValue={w.main_worker}
            />
            Ответственный за проект
          </p>
        </div>
      );
    });


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
    workersIsLoading: state.workers.isLoading,
    workersFiPost: state.workers.workers.map(w => {
      return (w.fi + ", " + w.post);
    }),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllWorkers: () => dispatch(getAllWorkers()),
    saveDwToStore: (data) => dispatch(saveDwToStore(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractDwAdd);