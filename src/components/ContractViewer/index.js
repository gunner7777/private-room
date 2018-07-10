import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainWorkerOnProject from '../MainWorkerOnProject';
import DocsFromProject from '../DocsFromProject';
import Payments from '../Payments';
import Plan from '../Plan';
import WorkersProject from '../WorkersProject';
import Title from '../Title';
import { getContract, getAllWorkers } from '../../actions';
import AuthGenerator from '../../containers/AuthGenerator';

class ContractViewer extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData(this.props.match.params.id);
    this.props.getAllWorkers();
  }

  render() {
    if(this.props.isLoading) {
      return <p>Loading data</p>;
    }

    const { name, docs, plan, payments, workers } = this.props.contract;
    
    let man = null;
    let main = null;
    
    for (let w of workers) {
      if(w.main_worker === "1") {
        main = w;
      }
      if(w.post === "Менеджер") {
        man = w;
      }
    }

    const mainWorker = main === null ? man : main;

    return (
      <div>
        <Title>
          Личный кабинет
        </Title>
        <Title>
          Договор № {name}
        </Title>
        <AuthGenerator />
        <div className='Container flexblock'>
          <DocsFromProject docs={docs} />
          <MainWorkerOnProject main={mainWorker}/>
        </div>
        <Payments payments={payments} />
        <Plan plan={plan} />
        <WorkersProject workers={workers} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contract: state.contract.contract,
    isLoading: state.contract.isLoading,
    workers: state.workers.workers,

    selectOpt: state.contract.selectOpt,
    /*workersId: state.workers.workers.map(id => {
      return id.id_worker;
    }),*/
    workersFiPost: state.workers.workers.map(w => {
      return (w.fi + ", " + w.post);
    }),
    selectPost: state.workers.selectPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => dispatch(getContract(id)),
    getAllWorkers: () => dispatch(getAllWorkers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractViewer);