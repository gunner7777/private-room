import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ContractMainInfoEditor from '../../components/Contracts/ContractMainInfoEditor';
import AllStages from '../AllStages';

const EditorBlock = ({match}) => {
  //console.log()
  console.log(match);
  //const { name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments, workers } = props.contract;
  return (
    <div>
    
    <Switch>
      <Route
        exact
        path='/contract/1/edit1'
        component={EditorBlock}
      />
      <Route
        path='/contract/1/edit/common'
        component={AllStages}
      />
      <Route
        path='/docs'
        render={() => (<p>DOCS</p>)}
      />
    </Switch>
    </div>
  );
}



export default EditorBlock;