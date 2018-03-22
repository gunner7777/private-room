import axios from 'axios';
import {
  GET_ALL_WORKERS,
  GET_ALL_WORKERS_SUCCESS,
  WORKERS_HAVE_ERROR,
  GET_SINGLE_WORKER_SUCCESS,
  SINGLE_WORKER_HAVE_ERROR,
  ADD_WORKER,
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  GET_INFO,
  UPDATE_WORKER_INFO,
  UPDATE_WORKER_INFO_SUCCESS,
  GET_ALL_CONTRACTS,
  GET_ALL_CONTRACTS_HAS_ERROR,
  GET_ALL_CONTRACTS_SUCCESS,
  GET_CONTRACT_HAS_ERROR,
  GET_CONTRACT_SUCCESS,
  CONTRACT_IS_LOADING,
  UPDATE_MAIN_INFO_SUCCESS,
  UPDATE_DOCS_SUCCESS,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PAYS_SUCCESS
} from '../constants/actionTypes';

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
export const getAllContracts = () => {
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
        dispatch(getAllContractsSuccess(response.data));
      })
      .catch(() => dispatch(getAllContractsHasError(true)));
  }
}

export const getAllContractsSuccess = (contracts) => {
  return {
    type: GET_ALL_CONTRACTS_SUCCESS,
    contracts
  }
}

export const getAllContractsHasError = (bool) => {
  return {
    type: GET_ALL_CONTRACTS_HAS_ERROR,
    bool
  }
}

export const getContract = (id) => {
  const url  = 'http://теплофф.рф/tyryr/dogovor/readOne.php';
  return (dispatch) => {
    dispatch(contractIsLoading(true));
    axios.get(url, id)
      .then(response => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        //console.log("action", response.data);
        dispatch(getContractSuccess(response.data));
        dispatch(contractIsLoading(false));
      })
      .catch(() => dispatch(getContractHasError(true)));
  }
}

export const getContractSuccess = (data) => {
  return {
    type: GET_CONTRACT_SUCCESS,
    data
  }
}

export const contractIsLoading = (bool) => {
  return {
    type: CONTRACT_IS_LOADING,
    bool
  }
}

export const getContractHasError = (bool) => {
  return {
    type: GET_CONTRACT_HAS_ERROR,
    bool
  }
}


export const updateMainInfo = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updateDogovor.php';
  //console.log("data", data);
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        dispatch(updateMainInfoSuccess(data));
        //console.log(response);
      })
      .catch(error => {
        console.log("error update", error.response);
      });
  }
}

export const updateMainInfoSuccess = (data) => {
  return {
    type: UPDATE_MAIN_INFO_SUCCESS,
    data
  }
}

export const updateDocs = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updateDocs.php';
  console.log("data", data);
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        dispatch(updateDocsSuccess(data.docs));
        //console.log(response);
      })
      .catch(error => {
        console.log("error update", error.response);
      });
  }
}

export const updateDocsSuccess = (data) => {
  return {
    type: UPDATE_DOCS_SUCCESS,
    data
  }
}
  

export const updatePlan = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updatePlan.php';
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        dispatch(updatePlanSuccess(data.plan));
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }
}

export const updatePlanSuccess = (data) => {
  return {
    type: UPDATE_PLAN_SUCCESS,
    data
  }
}

export const updatePayments = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updatePayments.php';
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        //console.log(response.data);
        dispatch(updatePaymentsSuccess(data.payments));
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }
}

export const updatePaymentsSuccess = (data) => {
  return {
    type: UPDATE_PAYS_SUCCESS,
    data
  }
}