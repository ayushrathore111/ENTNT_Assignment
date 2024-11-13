// actionTypes.js
export const ADD_CANDIDATE = 'ADD_CANDIDATE';
export const DELETE_CANDIDATE = 'DELETE_CANDIDATE';
export const GET_CANDIDATES = 'GET_CANDIDATES';
export const UPDATE_CANDIDATE_STATUS = 'UPDATE_CANDIDATE_STATUS';

// candidateActions.js
import { ADD_CANDIDATE, DELETE_CANDIDATE, GET_CANDIDATES, UPDATE_CANDIDATE_STATUS } from './actionTypes';

// Add a new candidate
export const addCandidate = (candidate) => {
  return {
    type: ADD_CANDIDATE,
    payload: candidate
  };
};

// Delete a candidate
export const deleteCandidate = (candidateId) => {
  return {
    type: DELETE_CANDIDATE,
    payload: candidateId
  };
};

// Get all candidates for a specific job
export const getCandidates = (jobId) => {
  return {
    type: GET_CANDIDATES,
    payload: jobId
  };
};

// Update a candidate's application status
export const updateCandidateStatus = (candidateId, status) => {
  return {
    type: UPDATE_CANDIDATE_STATUS,
    payload: { candidateId, status }
  };
};
