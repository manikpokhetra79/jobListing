import { ADD_JOBS } from './actionTypes';
export function addJobs(data) {
  return {
    type: ADD_JOBS,
    jobs: data,
  };
}
