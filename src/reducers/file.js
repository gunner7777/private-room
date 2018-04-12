import { 
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_BEFORE 
} from '../constants/actionTypes';

const fileS = {
  ok: "false",
  fileName: ''
};

export const file = (state=fileS, action) => {
  //console.log(state);
  switch(action.type) {
    case UPLOAD_FILE_SUCCESS: 
      return state, {...action.fileState};
    case UPLOAD_FILE_BEFORE:
      return {
        ...state,
        ok: action.bool
      }
    default: return state;
  }
}