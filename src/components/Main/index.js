import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllStages from '../AllStages';
import FormInput from '../FormInput';
import Settings from '../Settings';
import InputFile from '../../blocks/InputFile';
import Select from '../../blocks/Select';
import DogovorInfo from '../DogovorInfo';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={InputFile} />
      <Route path='/about' component={FormInput} />
      <Route path='/settings' component={Select} />
      <Route path='/addDogovor' component={DogovorInfo} />
    </Switch>
  );
}

export default Main;