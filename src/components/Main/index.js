import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllStages from '../AllStages';
import FormInput from '../FormInput';
import Settings from '../Settings';
import InputFile from '../../blocks/InputFile';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={InputFile} />
      <Route path='/about' component={FormInput} />
      <Route exact path='/settings' component={Settings} />
    </Switch>
  );
}

export default Main;