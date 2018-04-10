import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AdderMenu from '../../../components/AdderMenu';
import ContractMainInfoAdd from '../../../containers/Contracts/ContractMainInfoAdd';
import ContractDocsAdd from '../../../containers/Contracts/ContractDocsAdd';
import ContractPlanAdd from '../../../containers/Contracts/ContractPlanAdd';
import ContractPaymentsAdd from '../../../containers/Contracts/ContractPaymentsAdd';
import ContractDwAdd from '../../../containers/Contracts/ContractDwAdd';

class ContractAdder extends Component {
  constructor() {
    super();
  }
   render() {
     // Просто запоминаем все шаги (основная информация, доки и тд) в сторе.
     // Будет одна кнопка "Сохранить", которая в конце просто выгрузит все в базу
     
     return (
      <div>
        <AdderMenu />
        <Switch>
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
      </div>
     );
   }

}

export default ContractAdder;