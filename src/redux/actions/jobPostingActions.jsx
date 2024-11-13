
// jobPostingActions.js
import { ADD_JOB, DELETE_JOB, GET_JOBS, UPDATE_JOB,EDIT_JOB } from './actionTypes';

// Add a new job posting
export const addJob = (job) => {
  return {
    type: ADD_JOB,
    payload: job
  };
};

// Delete a job posting
export const deleteJob = (jobId) => {
  return {
    type: DELETE_JOB,
    payload: jobId
  };
};

// Get all job postings
export const getJobs = () => {
  return {
    type: GET_JOBS
  };
};

// Update a job posting
export const updateJob = (job) => {
  return {
    type: UPDATE_JOB,
    payload: job
  };
};

export const editJob = (job) => {
  return {
    type: EDIT_JOB,
    payload: job
  };
};
