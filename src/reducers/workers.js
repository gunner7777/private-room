import { GET_ALL_WORKERS } from '../actions';

const workers = (state=[], action) => {
  switch(action.type) {
    case GET_ALL_WORKERS:
      return state;
    default:
      return state;
  }
}

export default workers;