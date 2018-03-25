import {
  GET_CONTRACT_HAS_ERROR,
  GET_CONTRACT_SUCCESS,
  CONTRACT_IS_LOADING,
  UPDATE_MAIN_INFO_SUCCESS,
  UPDATE_DOCS_SUCCESS,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PAYS_SUCCESS,
  ADD_NEW_DOC,
  ADD_NEW_PLAN,
  ADD_NEW_PAY,
  DELETE_DOC_SUCCESS,
  DELETE_PLAN_SUCCESS,
  DELETE_PAY_SUCCESS
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
    case UPDATE_PLAN_SUCCESS:
      return {
        ...state,
        contract: {
          ...state.contract,
          plan: action.data
        }
      }
    case UPDATE_PAYS_SUCCESS: 
      return {
        ...state,
        contract: {
          ...state.contract,
          payments: action.data
        }
      }
    case ADD_NEW_DOC:
      return {
        ...state,
        contract: {
          ...state.contract,
          docs: state.contract.docs.concat(action.doc)
        }
      }
    case ADD_NEW_PLAN:
      return {
        ...state,
        contract: {
          ...state.contract,
          plan: state.contract.plan.concat(action.plan)
        }
      }
    case ADD_NEW_PAY:
      return {
        ...state,
        contract: {
          ...state.contract,
          payments: state.contract.payments.concat(action.pay)
        }
      }
    case DELETE_DOC_SUCCESS:
      return {
        ...state,
        contract: {
          ...state.contract,
          docs: state.contract.docs.filter(doc => {
            if(doc.id_doc !== action.id)
              return doc;
          })
        }
      }
    case DELETE_PLAN_SUCCESS:
      return {
        ...state,
        contract: {
          ...state.contract,
          plan: state.contract.plan.filter(p => {
            if(p.id_plan !== action.id)
              return p;
          })
        }
      }
    case DELETE_PAY_SUCCESS:
      return {
        ...state,
        contract: {
          ...state.contract,
          payments: state.contract.payments.filter(pay => {
            if(pay.id_pay !== action.id)
              return pay;
          })
        }
      }
    default: return state;
  }
}