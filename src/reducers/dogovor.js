import { GET_ALL_DOGOVOR_SUCCESS, GET_ALL_DOGOVOR_HAS_ERROR, GET_ONE_DOGOVOR_SUCCESS, DOGOVOR_IS_LOADING } from '../actions';

export const dogovor = (state={}, action) => {
  switch(action.type) {
    case GET_ALL_DOGOVOR_SUCCESS: 
      return {
        ...state, 
        dogovor: action.dogovor
      }
    case GET_ONE_DOGOVOR_SUCCESS:
      return {
        ...state, 
        single: action.data
      }
    case DOGOVOR_IS_LOADING:
      return {
        ...state,
        isLoading:action.bool
      }
    default: return state;
  }
}