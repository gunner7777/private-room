import {
  GET_ALL_CONTRACTS_HAS_ERROR,
  GET_ALL_CONTRACTS_SUCCESS,
} from '../constants/actionTypes';

export const contracts = (state={isLoading: true}, action) => {
  switch(action.type) {
    case GET_ALL_CONTRACTS_SUCCESS: 
      return {
        ...state, 
        contracts: action.contracts
      }
    /*case CONTRACTS_IS_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }*/
    default: return state;
  }
}