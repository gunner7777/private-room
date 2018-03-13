import { combineReducers } from 'redux';
import { workers, workerInfo, singleWorker } from './workers';
import { file } from './file';
import { dogovor } from './dogovor';

const rootReducer = combineReducers({
  workers: workers,
  //worker: singleWorker,
  //workerInfo: workerInfo,
  file: file,
  dogovor: dogovor
});

export default rootReducer;