import { UPLOAD_FILE_SUCCESS } from '../actions';

const fileS = {
    ok: "false",
    fileName: ''
};

export const file = (state=fileS, action) => {
    //console.log(state);
    switch(action.type) {
        case UPLOAD_FILE_SUCCESS: return state, {...action.fileState};
        default: return state;
    }
}