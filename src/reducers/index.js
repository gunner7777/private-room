import { combineReducers } from 'redux';
import { workers, workerInfo, singleWorker } from './workers';
import { file } from './file';
import { contracts } from './contracts';
import { contract } from './contract';

const rootReducer = combineReducers({
  workers: workers,
  //worker: singleWorker,
  //workerInfo: workerInfo,
  file: file,
  contracts: contracts,
  contract: contract
});

export default rootReducer;