import {
  GET_CONTRACT_HAS_ERROR,
  GET_CONTRACT_SUCCESS,
  CONTRACT_IS_LOADING
} from '../constants/actionTypes';

export const contract = (state={isLoading: true}, action) => {
  switch(action.type) {
    case GET_CONTRACT_SUCCESS:
      return {
        ...state, 
        contract: action.data
      }
    case CONTRACT_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }
    default: return state;
  }
}