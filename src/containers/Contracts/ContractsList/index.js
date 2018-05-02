import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllContracts, deleteContract } from '../../../actions';
import ContractCard from '../../../components/ContractCard';
import './ContractsList.css';

class ContractsList extends Component {
  constructor() {
    super();
    
    this.deleteContract = this.deleteContract.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  deleteContract(idContract) {
    //console.log(idContract);
    this.props.deleteContract(idContract);
  }

  render() {
    const cList = this.props.contracts === undefined ? "<p>Договоров нет</p>" : this.props.contracts.map((contract) => {
      return (
        <ContractCard 
          id={contract.id_dog}  
          name={contract.name}
          date={contract.date}
          fi_zakaz={contract.fi_zakaz}
          o_zakaz={contract.o_zakaz}
          phone={contract.phone}
          comments={contract.comments}
          deleteThisContract={this.deleteContract}
        />
      )
    });
    return (
      <div className="ContractList">
        {cList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contracts: state.contracts.contracts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(getAllContracts()),
    deleteContract: (id) => dispatch(deleteContract(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractsList);