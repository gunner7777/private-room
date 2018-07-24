import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../../blocks/Button';
import AdderMenu from '../../../components/AdderMenu';
import ContractMainInfoAdd from '../../../containers/Contracts/ContractMainInfoAdd';
import ContractDocsAdd from '../../../containers/Contracts/ContractDocsAdd';
import ContractPlanAdd from '../../../containers/Contracts/ContractPlanAdd';
import ContractPaymentsAdd from '../../../containers/Contracts/ContractPaymentsAdd';
import ContractDwAdd from '../../../containers/Contracts/ContractDwAdd';
import { addContract } from '../../../actions';
import './ContractAdder.css';


class ContractAdder extends Component {
  constructor() {
    super();

    this.state = {
      links: [
        /*{
          ssylka: '/addContract',
          text: 'Home',
          chapter: 'NULL',
          disabled: false
        },*/
        {
          ssylka: '/addContract/common',
          text: 'Общая информация',
          prevChapter: 'MUST',
          disabled: false
        },
        {
          ssylka: '/addContract/docs',
          text: 'Документы',
          prevChapter: 'MI',
          disabled: true
        },
        {
          ssylka: '/addContract/plan-rabot',
          text: 'План работ',
          prevChapter: 'DOCS',
          disabled: true
        },
        {
          ssylka: '/addContract/payments',
          text: 'Платежи',
          prevChapter: 'PLAN',
          disabled: true
        },
        {
          ssylka: '/addContract/workers',
          text: 'Работники',
          prevChapter: 'PAYS',
          disabled: true
        }
      ]
    }

    this.addNewContract = this.addNewContract.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const newState = this.state.links.map(l => {
      if(nextProps.lastChapter.indexOf(l.prevChapter) !== -1) {
        l.disabled = false;
      } else {
        l.disabled = true;
        //l.ssylka = "#";
      }
      return l;
     });
     console.log("newState", newState);
    this.setState({
      ...this.state,
      links: newState
    })
  }
  
  componentDidMount() {
     /*const newState = this.state.links.map(l => {
      if(this.props.lastChapter.indexOf(l.prevChapter) !== -1) {
        l.disabled = false;
      } else {
        l.disabled = true;
      }
      return l;
     });

     console.log("state state", newState);*/
  }
  

  addNewContract() {
    console.log(this.props.newContract);
    this.props.addContract(this.props.newContract);
  }

   render() {
     // Просто запоминаем все шаги (основная информация, доки и тд) в сторе.
     // Будет одна кнопка "Сохранить", которая в конце просто выгрузит все в базу
     const addButton = this.props.lastChapter.length === 6 
      ? <div className="ContractAdder-AddButton">
          <Button
            text="Добавить договор"
            buttonClick={this.addNewContract} />
        </div>
      : "";
     return (
      <div>
        <AdderMenu 
          chapter={this.props.lastChapter}
          links={this.state.links}
        />
        <Switch>
        <Route
            exact path="/addContract"
            render={() => 
              <ContractMainInfoAdd />}
          />
          <Route
            path="/addContract/common"
            render={() => 
              <ContractMainInfoAdd />}
          />
          <Route
            path="/addContract/docs"
            render={() => 
              <ContractDocsAdd />}
          />
          <Route
            path="/addContract/plan-rabot"
            render={() => 
              <ContractPlanAdd />}
          />
          <Route
            path="/addContract/payments"
            render={() => 
              <ContractPaymentsAdd />}
          />
          <Route
            path="/addContract/workers"
            render={() => 
              <ContractDwAdd />}
          />
        </Switch>
        {addButton}
      </div>
     );
   }

}

const mapStateToProps = (state) => {
  return {
    newContract: state.newContract.newContract,
    lastChapter: state.newContract.lastChapter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContract: (data) => dispatch(addContract(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContractAdder);