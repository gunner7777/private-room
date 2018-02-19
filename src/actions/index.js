import axios from 'axios';

export const GET_ALL_WORKERS = "GET_ALL_WORKERS";

export const getAllWorkers = (workers) => {
  return {
    type: GET_ALL_WORKERS,
    workers
  }
}
