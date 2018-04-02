import { combineReducers } from 'redux';
import { workers } from './workers';
import { file } from './file';
import { contracts } from './contracts';
import { contract } from './contract';
import { newContract } from './newContract';

const rootReducer = combineReducers({
  workers: workers,
  file: file,
  contracts: contracts,
  contract: contract,
  newContract: newContract
});

export default rootReducer;