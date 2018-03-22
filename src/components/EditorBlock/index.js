import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ContractMainInfoEditor from '../../components/Contracts/ContractMainInfoEditor';
import AllStages from '../AllStages';

const EditorBlock = (props) => {
  //console.log()
  //const { name, date, fi_zakaz, o_zakaz, phone, comments, docs, plan, payments, workers } = props.contract;
  return (
    <Switch>
      <Route
        path='/common'
        component={AllStages}
      />
      <Route
        path='/docs'
        render={() => (<p>DOCS</p>)}
      />
    </Switch>
  );
}



export default EditorBlock;