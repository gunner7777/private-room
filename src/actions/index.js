import axios from 'axios';

export const GET_ALL_WORKERS = "GET_ALL_WORKERS";
export const GET_ALL_WORKERS_SUCCESS = "GET_ALL_WORKERS_SUCCESS";
export const WORKERS_HAVE_ERROR = "WORKERS_HAVE_ERROR";
export const GET_SINGLE_WORKER_SUCCESS = "GET_SINGLE_WORKER_SUCCESS";
export const SINGLE_WORKER_HAVE_ERROR = "SINGLE_WORKER_HAVE_ERROR";
export const ADD_WORKER = "ADD_WORKER";
export const UPLOAD_FILE = "UPLOAD_FILE";
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS";
export const GET_INFO = "GET_INFO";


export const getAllWorkers = (url) => {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => {
        dispatch(getAllWorkersSuccess(response.data));
      })
      .catch(() => dispatch(workersHaveError(true)));
  }
}

export const getAllWorkersSuccess = (workers) => {
  return {
    type: GET_ALL_WORKERS_SUCCESS,
    workers
  }
}

export const workersHaveError = (bool) => {
  return {
    type: WORKERS_HAVE_ERROR,
    hasError: bool
  }
}

export const getSingleWorker = (url) => {
  return dispatch => {
    axios.get(url)
      .then((response) => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        
        return response;
      })
      .then((response) => {
        
        dispatch(getSingleWorkerSuccess(response.data));
      })
      .catch(() => dispatch(singleWorkerHaveError(true)));
  }
}

export const getSingleWorkerSuccess = (worker) => {
  return {
    type: GET_SINGLE_WORKER_SUCCESS,
    worker
  }
}

export const singleWorkerHaveError = (bool) => {
  return {
    type: SINGLE_WORKER_HAVE_ERROR,
    hasError: bool
  }
}

export const addWorker = (url, data) => {
  return dispatch => {
    console.log(data);
    axios.post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("errororro", error.response);
      });
  }
}

export const uploadFile = (type, data, fileName) => {
  return dispatch => {
    let url = "http://теплофф.рф/upl.php";
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };

    axios.post(url, data, config)
      .then(function (res) {
        dispatch(uploadFileSuccess({
          ok: true,
          fileName: fileName
        }));
      })
      .catch(error => {
        console.log("errororro", error.response);
      });
  }
}

export const uploadFileSuccess = (fileState) => {
  return {
    type: UPLOAD_FILE_SUCCESS,
    fileState
  }
}

export const getInfo = (data) => {
  return {
    type: GET_INFO,
    person: data
  }
}