import { combineReducers } from 'redux';
import { workers, workerInfo, singleWorker } from './workers.js';
import { file } from './file.js';

const rootReducer = combineReducers({
  workers: workers,
  worker: singleWorker,
  workerInfo: workerInfo,
  file: file
});

export default rootReducer;