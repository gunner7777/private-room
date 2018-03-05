import { GET_ALL_WORKERS_SUCCESS, GET_SINGLE_WORKER_SUCCESS, GET_INFO } from '../actions';

const initialState = [
  {
    id: 1,
    FI: "Harry Kane",
    post: "manager",
    photo: "link",
    phone: "877890",
    email: "Kane@epl.com"
  },
  {
    id: 2,
    FI: "Romelu Lukaku",
    post: "manager",
    photo: "link",
    phone: "877844",
    email: "Lukaku@epl.com"
  },
];

export const workers = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_WORKERS_SUCCESS:
      return action.workers;
    default:
      return state;
  }
}

export const singleWorker = (state={}, action) => {
  switch(action.type) {
    case GET_SINGLE_WORKER_SUCCESS:
      return action.worker;
    default:
      return state;
  }
}

/*
export const newWorker = (state={}, action) => {
  switch(action.type) {
    case ADD_NEW_WORKER: return state;
    default: return state;
  }
} */

export const workerInfo = (state={}, action) => {
  switch(action.type) {
    case GET_INFO: return action.data;
    default: return state;
  }
}