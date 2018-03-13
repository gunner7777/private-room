import { GET_ALL_DOGOVOR_SUCCESS, GET_ALL_DOGOVOR_HAS_ERROR } from '../actions';

export const dogovor = (state=[], action) => {
    switch(action.type) {
        case GET_ALL_DOGOVOR_SUCCESS: 
            return {
                ...state, 
                dogovor: action.dogovor
            }
        default: return state;
    }
}