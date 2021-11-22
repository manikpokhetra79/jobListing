import { ADD_JOBS } from '../action/actionTypes';
const initialState = {
  jobs: [],
};

export function jobs(state = initialState, action) {
  switch (action.type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };

    default:
      return state;
  }
}
