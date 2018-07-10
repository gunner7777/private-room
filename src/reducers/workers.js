import { 
  GET_ALL_WORKERS_SUCCESS, 
  GET_SINGLE_WORKER_SUCCESS, 
  GET_INFO, 
  UPDATE_WORKER_INFO_SUCCESS,
  WORKERS_IS_LOADING
} from '../constants/actionTypes';

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
      fi: "Harry Kane",
      post: "manager",
      photo: "link",
      phone: "877890",
      email: "Kane@epl.com"
    },
    {
      id: 2,
      fi: "Romelu Lukaku",
      post: "manager",
      photo: "link",
      phone: "877844",
      email: "Lukaku@epl.com"
    },
  ],
  selectPost: [
    'Менеджер',
    'Архитектор',
    'Бригадир'
  ]
};

export const workers = (state=initialState, action) => {
  switch(action.type) {
    case GET_ALL_WORKERS_SUCCESS:
      return {
        ...state,
        workers: action.workers
      };

    case GET_INFO:
      return {
        ...state,
        single: action.data
      };
    case WORKERS_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }
    
    case UPDATE_WORKER_INFO_SUCCESS: return state;

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