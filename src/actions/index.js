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
export const UPDATE_WORKER_INFO = "UPDATE_WORKER_INFO";
export const UPDATE_WORKER_INFO_SUCCESS = "UPDATE_WORKER_INFO_SUCCESS";
export const GET_ALL_DOGOVOR = "GET_ALL_DOGOVOR";
export const GET_ALL_DOGOVOR_HAS_ERROR = "GET_ALL_DOGOVOR_HAS_ERROR";
export const GET_ALL_DOGOVOR_SUCCESS = "GET_ALL_DOGOVOR_SUCCESS";
export const GET_ONE_DOGOVOR_HAS_ERROR = "GET_ONE_DOGOVOR_HAS_ERROR";
export const GET_ONE_DOGOVOR_SUCCESS = "GET_ONE_DOGOVOR_SUCCESS";

export const getAllWorkers = () => {
  const url = 'http://теплофф.рф/tyryr/worker/readAll.php';
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => {
        //console.log("resp[onse", response);
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

export const addWorker = (data) => {
  const url = 'http://теплофф.рф/tyryr/worker/create.php';
  return dispatch => {
    console.log(data);
    axios.post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("error add worker", error.response);
      });
  }
}

export const getInfo = (data) => {
  return {
    type: GET_INFO,
    data
  }
}

export const updateWorkerInfo = (url, data) => {
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("error update", error.response);
      });
  }
}

export const deleteWorker = (url, id) => {
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        console.log(response);
        dispatch(getAllWorkers());
      })
      .catch(error => {
        console.log("error delete", error.response);
      });
  }
}



/** File actions */
export const uploadFile = (type, data, fileName) => {
  return dispatch => {
    const url = "http://теплофф.рф/upl.php";
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
        console.log("error upload file", error.response);
      });
  }
}

export const uploadFileSuccess = (fileState) => {
  return {
    type: UPLOAD_FILE_SUCCESS,
    fileState
  }
}



/** Dogovor actions */
export const getAllDogovor = () => {
  const url = 'http://теплофф.рф/tyryr/dogovor/readAll.php';
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        console.log("resp", response);
        dispatch(getAllDogovorSuccess(response.data));
      })
      .catch(() => dispatch(getAllDogovorHasError(true)));
  }
}

export const getAllDogovorSuccess = (dogovor) => {
  return {
    type: GET_ALL_DOGOVOR_SUCCESS,
    dogovor
  }
}

export const getAllDogovorHasError = (bool) => {
  return {
    type: GET_ALL_DOGOVOR_HAS_ERROR,
    bool
  }
}

export const getOneDogovor = (id) => {
  const url  = 'http://теплофф.рф/tyryr/dogovor/readOne.php';
  return (dispatch) => {
    axios.get(url, id)
      .then(response => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        dispatch(getOneDogovorSuccess(response.data));
      })
      .catch(() => dispatch(getOneDogovorHasError(true)));
  }
}

export const getOneDogovorSuccess = (dog) => {
  return {
    type: GET_ONE_DOGOVOR_SUCCESS,
    dog
  }
}

export const getOneDogovorHasError = (bool) => {
  return {
    type: GET_ONE_DOGOVOR_HAS_ERROR,
    bool
  }
}