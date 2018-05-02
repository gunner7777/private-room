import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllStages from '../AllStages';
import FormInput from '../FormInput';
import Settings from '../Settings';
import InputFile from '../../blocks/InputFile';
import Select from '../../blocks/Select';
import ContractInfo from '../ContractInfo';
import WorkerList from '../../containers/WorkerList';
import WorkerAdd from '../../containers/WorkerAdd';
import WorkerInfo from '../../containers/WorkerInfo';
import WorkerEditor from '../../containers/WorkerEditor';
import ContractsList from '../../containers/Contracts/ContractsList';
import ContractEditor from '../../containers/Contracts/ContractEditor';
import ContractAdder from '../../containers/Contracts/ContractAdder';
import ContractViewer from '../../components/ContractViewer';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={InputFile} />
      <Route path='/about' component={FormInput} />
      <Route path='/settings' component={Select} />
      <Route path='/addContract' component={ContractAdder} />
      <Route path='/allWorkers' component={WorkerList} />
      <Route exact path="/workers/:id?/edit" component={WorkerEditor} />
      <Route path='/addWorker' component={WorkerAdd} />
      <Route path='/allContracts' component={ContractsList} />
      <Route path="/contract/:id?/edit" component={ContractEditor} />
      <Route path="/contract/:id?/view" component={ContractViewer} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Main;