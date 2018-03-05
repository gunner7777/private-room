import { GET_ALL_WORKERS_SUCCESS, GET_SINGLE_WORKER_SUCCESS, GET_INFO } from '../actions';

/*const initialState = [
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
];*/

const initialState = {
  workers: [
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
  ],
  single: {},
};

export const workers = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_WORKERS_SUCCESS:
      return {...state, workers: action.workers};
    case GET_INFO:
      console.log("state", state);
      state.workers.map(worker => {
        
        if(worker.id_worker === action.id)
          console.log("worker", worker);
          return {...state, single: worker};
      }); 
      return state;
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