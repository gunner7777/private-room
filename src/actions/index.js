import axios from 'axios';
import {
  GET_ALL_WORKERS,
  GET_ALL_WORKERS_SUCCESS,
  WORKERS_HAVE_ERROR,
  GET_SINGLE_WORKER_SUCCESS,
  SINGLE_WORKER_HAVE_ERROR,
  ADD_WORKER,
  WORKERS_IS_LOADING,
  
  UPLOAD_FILE,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_BEFORE,

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
  UPDATE_DOC_UPLOAD_STATUS,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PAYS_SUCCESS,
  ADD_NEW_DOC,
  DELETE_DOC_SUCCESS,
  ADD_NEW_PLAN,
  ADD_NEW_PAY,
  DELETE_PLAN_SUCCESS,
  DELETE_PAY_SUCCESS,
  UPDATE_DOGOVOR_WORKERS_SUCCESS,
  ADD_NEW_DW,
  ADD_CONTRACT_SUCCESS,
  DELETE_DW_SUCCESS,
  SAVE_MAIN_INFO_TO_STORE,
  SAVE_DOCS_TO_STORE,
  SAVE_PLAN_TO_STORE,
  SAVE_PAYMENTS_TO_STORE,
  SAVE_DW_TO_STORE,
  SET_LAST_COMPLETE_CHAPTER
} from '../constants/actionTypes';

export const getAllWorkers = () => {
  const url = 'http://теплофф.рф/tyryr/worker/readAll.php';
  return (dispatch) => {
    dispatch(workersIsLoading(true));
    axios.get(url)
      .then((response) => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }

        //return response;
        dispatch(getAllWorkersSuccess(response.data));
        dispatch(workersIsLoading(false));
      })
      /*.then((response) => {
        //console.log("resp[onse", response);
        dispatch(getAllWorkersSuccess(response.data));
      })*/
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

export const workersIsLoading = (bool) => {
  return {
    type: WORKERS_IS_LOADING,
    bool
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
export const uploadFile = (type, data, fileName, butId) => {
  return dispatch => {
    dispatch(uploadFileBefore(false))
    const url = "http://теплофф.рф/upl.php";
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };

    axios.post(url, data, config)
      .then(function (res) {
        //console.log(data);
        //console.log(res.data);
        dispatch(uploadFileSuccess({
          ok: true,
          fileName: fileName,
          buttonId: butId
        }));
        dispatch(updateDocUploadStatus({
          buttonId: butId
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

export const uploadFileBefore = (fileState) => {
  return {
    type: UPLOAD_FILE_BEFORE,
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
  const url  = 'http://теплофф.рф/tyryr/dogovor/readOne.php?id_dog='+id;
  //console.log("id", id);
  return (dispatch) => {
    dispatch(contractIsLoading(true));
    axios.get(url)
      .then(response => {
        if(response.status !== 200) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => {
        console.log("action", response.data);

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
        data.docs[data.docs.length-1].id_doc = response.data;
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

export const updateDocUploadStatus = (butId) => {
  return {
    type: UPDATE_DOC_UPLOAD_STATUS,
    butId
  }
}




export const updatePlan = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updatePlan.php';
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        data.plan[data.plan.length-1].id_plan = response.data;
        //console.log(data.plan);
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
        data.payments[data.payments.length-1].id_pay = response.data;
        dispatch(updatePaymentsSuccess(data.payments));
      })
      .catch(error => {
        //console.log("error pays", error.response);
        console.log("error pays", error);
      });
  }
}

export const updatePaymentsSuccess = (data) => {
  return {
    type: UPDATE_PAYS_SUCCESS,
    data
  }
}

export const updateDogovorWorkers = (data, w) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/updateWorkers.php';
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        //console.log("data", response.data);
        const updWorkers = data.dw.map(d => {
          for (let item in w) {
            if(w[item].id_worker === d.id_worker) {
              return { ...w[item],
                id_dw: d.id_dw,
                main_worker: d.main_worker
              };
            }
          }
        });
        //console.log("data", updWorkers);
        
        updWorkers[updWorkers.length-1].id_dw = response.data;
        console.log("data", updWorkers);
        dispatch(updateDogovorWorkersSuccess(updWorkers));
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }
}

export const updateDogovorWorkersSuccess = (data) => {
  return {
    type: UPDATE_DOGOVOR_WORKERS_SUCCESS,
    data
  }
}

export const addNewDoc = (data) => {
  return {
    type: ADD_NEW_DOC,
    doc: data
  }
}

export const addNewPlan = (data) => {
  return {
    type: ADD_NEW_PLAN,
    plan: data
  }
}

export const addNewPay = (data) => {
  return {
    type: ADD_NEW_PAY,
    pay: data
  }
}

export const addNewDW = (data) => {
  return {
    type: ADD_NEW_DW,
    dw: data
  }
}

export const addContract = (data) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/create.php';
  
  return dispatch => {
    axios.post(url, data)
      .then(response => {
        console.log(response.data);
        dispatch(addContractSuccess(true));
      })
      .catch(error => {
        console.log("error", error.response);
      });
  }
}

export const addContractSuccess = (bool) => {
  return {
    type: ADD_CONTRACT_SUCCESS,
    bool
  }
}

export const deleteDoc = (id) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/deleteDoc.php';
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        dispatch(deleteDocSuccess(id))
      })
      .catch(error => {
        console.log('del doc error', error.response);
      })
  }
}

export const deleteDocSuccess = (id) => {
  return {
    type: DELETE_DOC_SUCCESS,
    id
  }
}

export const deletePlan = (id) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/deletePlan.php';
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        dispatch(deletePlanSuccess(id))
      })
      .catch(error => {
        console.log('del plan error', error.response);
      })
  }
}

export const deletePlanSuccess = (id) => {
  return {
    type: DELETE_PLAN_SUCCESS,
    id
  }
}

export const deletePay = (id) => {
  const url = 'http://теплофф.рф/tyryr/dogovor/deletePay.php';
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        dispatch(deletePaySuccess(id))
      })
      .catch(error => {
        console.log('del pay error', error.response);
      })
  }
}

export const deletePaySuccess = (id) => {
  return {
    type: DELETE_PAY_SUCCESS,
    id
  }
}

export const deleteDW = (id) => {
  //console.log("id", id);
  const url = 'http://теплофф.рф/tyryr/dogovor/deleteDw.php';
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        dispatch(deleteDwSuccess(id))
      })
      .catch(error => {
        console.log('del dw error', error.response);
      })
  }
}

export const deleteDwSuccess = (id) => {
  return {
    type: DELETE_DW_SUCCESS,
    id
  }
}


export const saveMainInfoToStore = (data) => {
  return {
    type: SAVE_MAIN_INFO_TO_STORE,
    data
  }
}

/*export const saveMI = (data) => {
  return dispatch()
}*/

export const saveDocsToStore = (data) => {
  return {
    type: SAVE_DOCS_TO_STORE,
    data
  }
}

export const savePlanToStore = (data) => {
  return {
    type: SAVE_PLAN_TO_STORE,
    data
  }
}

export const savePaymentsToStore = (data) => {
  return {
    type: SAVE_PAYMENTS_TO_STORE,
    data
  }
}

export const saveDwToStore = (data) => {
  return {
    type: SAVE_DW_TO_STORE,
    data
  }
}

export const setLastCompleteChapter = (chapter) => {
  console.log(chapter);
  return {
    type: SET_LAST_COMPLETE_CHAPTER,
    chapter
  }
}

export const deleteContract = (id) => {
  var url = 'http://теплофф.рф/tyryr/dogovor/delete.php';
  return dispatch => {
    axios.post(url, id)
      .then(response => {
        console.log("success");
      })
      .catch(error => {
        console.log("contract delete error", error);
      })
  }
}