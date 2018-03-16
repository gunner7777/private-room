import {
  GET_CONTRACT_HAS_ERROR,
  GET_CONTRACT_SUCCESS,
  CONTRACT_IS_LOADING
} from '../constants/actionTypes';

const initialState = {
  isLoading: true,
  selectOpt: [
    'Договор',
    'Приложение',
    'Дополнительное соглашение'
  ],
};

export const contract = (state=initialState, action) => {
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