import {
  SAVE_MAIN_INFO_TO_STORE,
  SAVE_DOCS_TO_STORE,
  SAVE_PLAN_TO_STORE,
  SAVE_PAYMENTS_TO_STORE,
  SAVE_DW_TO_STORE
} from '../constants/actionTypes';

const initialState = {
  newContract: {},
  isLoading: true,
  selectOpt: [
    'Договор',
    'Приложение',
    'Дополнительное соглашение'
  ],
};

export const newContract = (state=initialState, action) => {
  switch(action.type) {
    case SAVE_MAIN_INFO_TO_STORE:
      return {
        ...state, 
        newContract: {
          ...state.newContract,
          name: action.data.name,
          date: action.data.date,
          fi_zakaz: action.data.fi_zakaz,
          o_zakaz: action.data.o_zakaz,
          phone: action.data.phone,
          comments: action.data.comments
        }
      }
    case SAVE_DOCS_TO_STORE:
      return {
        ...state, 
        newContract: {
          ...state.newContract,
          docs: action.data
        } 
      }
    case SAVE_PLAN_TO_STORE:
      return {
        ...state, 
        newContract: {
          ...state.newContract,
          plan: action.data
        } 
      }
    case SAVE_PAYMENTS_TO_STORE:
      return {
        ...state, 
        newContract: {
          ...state.newContract,
          payments: action.data
        } 
      }
    
    default: return state;
  }
}