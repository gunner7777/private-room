import { 
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_BEFORE
} from '../constants/actionTypes';

const fileS = {
  ok: false,
  fileName: '',
  buttonId: ''
};

export const file = (state=fileS, action) => {
  //console.log(state);
  switch(action.type) {
    case UPLOAD_FILE_SUCCESS:
    case UPLOAD_FILE_BEFORE:
      return state, {...action.fileState};
    default: return state;
  }
}