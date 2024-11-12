// src/redux/store.js
import { createStore } from 'redux';

// Example of a simple reducer
const initialState = {
  jobPostings: [],
  candidates: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_JOB_POSTING':
      return {
        ...state,
        jobPostings: [...state.jobPostings, action.payload],
      };
    case 'ADD_CANDIDATE':
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
