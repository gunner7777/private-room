import {
  SAVE_MAIN_INFO_TO_STORE,
  SAVE_DOCS_TO_STORE,
  SAVE_PLAN_TO_STORE,
  SAVE_PAYMENTS_TO_STORE,
  SAVE_DW_TO_STORE
} from '../constants/actionTypes';

const initialState = {
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
        newContract: action.data
      }
    case SAVE_DOCS_TO_STORE:
      return {
        ...state, 
        newContract: {
          docs: action.data
        } 
      }
    
    default: return state;
  }
}