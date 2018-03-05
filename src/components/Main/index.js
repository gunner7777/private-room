import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllStages from '../AllStages';
import FormInput from '../FormInput';
import Settings from '../Settings';
import InputFile from '../../blocks/InputFile';
import Select from '../../blocks/Select';
import DogovorInfo from '../DogovorInfo';
import WorkerList from '../../containers/WorkerList';
import WorkerAdd from '../../containers/WorkerAdd';
import WorkerInfo from '../../containers/WorkerInfo';
import WorkerEditor from '../../containers/WorkerEditor';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={InputFile} />
      <Route path='/about' component={FormInput} />
      <Route path='/settings' component={Select} />
      <Route path='/addDogovor' component={DogovorInfo} />
      <Route path='/allWorkers' component={WorkerList} />
      <Route exact path="/workers/:id?/edit" component={WorkerEditor} />
      <Route path='/addWorker' component={WorkerAdd} />
    </Switch>
  );
}

export default Main;