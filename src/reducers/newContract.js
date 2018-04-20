import {
  SAVE_MAIN_INFO_TO_STORE,
  SAVE_DOCS_TO_STORE,
  SAVE_PLAN_TO_STORE,
  SAVE_PAYMENTS_TO_STORE,
  SAVE_DW_TO_STORE,
  ADD_CONTRACT_SUCCESS,
  UPDATE_DOC_UPLOAD_STATUS,
  SET_LAST_COMPLETE_CHAPTER
} from '../constants/actionTypes';

const initialState = {
  newContract: {},
  isLoading: true,
  selectOpt: [
    'Договор',
    'Приложение',
    'Дополнительное соглашение'
  ],
  result: true,
  lastChapter: ""
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
    case SAVE_DW_TO_STORE:
      return {
        ...state, 
        newContract: {
          ...state.newContract,
          dw: action.data
        } 
      }
    case UPDATE_DOC_UPLOAD_STATUS: 
      return {
        ...state,
        newContract: {
          ...state.newContract,
          docs: action.data
        }
      }
    case ADD_CONTRACT_SUCCESS:
      return {
        ...state,
        result: action.bool
      };
    case SET_LAST_COMPLETE_CHAPTER:
      return {
        ...state,
        lastChapter: action.chapter
      }
    default: return state;
  }
}