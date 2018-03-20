import {
  GET_CONTRACT_HAS_ERROR,
  GET_CONTRACT_SUCCESS,
  CONTRACT_IS_LOADING,
  UPDATE_MAIN_INFO_SUCCESS,
  UPDATE_DOCS_SUCCESS
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
    case UPDATE_MAIN_INFO_SUCCESS: 
    //console.log("state", state);
      return {
        ...state,
        contract: {
          ...state.contract, 
          name: action.data.name,
          date: action.data.date,
          fi_zakaz: action.data.fi_zakaz,
          o_zakaz: action.data.o_zakaz,
          phone: action.data.phone,
          comments: action.data.comments
        }
      }
    case UPDATE_DOCS_SUCCESS: 
      return {
        ...state, 
        contract: {
          ...state.contract,
          docs: action.data
        }
      }
    default: return state;
  }
}