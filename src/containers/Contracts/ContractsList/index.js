import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllContracts } from '../../../actions';
import ContractCard from '../../../components/ContractCard';

class ContractsList extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props.contracts);
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
        />
      )
    });
    return (
      <div>
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
    fetchData: () => dispatch(getAllContracts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractsList);