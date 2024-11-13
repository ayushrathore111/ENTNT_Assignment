
// assessmentActions.js
import { ADD_ASSESSMENT, GET_ASSESSMENTS, DELETE_ASSESSMENT, UPDATE_ASSESSMENT } from './actionTypes';

// Add a new assessment
export const addAssessment = (assessment) => {
  return {
    type: ADD_ASSESSMENT,
    payload: assessment
  };
};

// Get all assessments
export const getAssessments = () => {
  return {
    type: GET_ASSESSMENTS
  };
};

// Delete an assessment
export const deleteAssessment = (assessmentId) => {
  return {
    type: DELETE_ASSESSMENT,
    payload: assessmentId
  };
};

// Update an existing assessment
export const updateAssessment = (assessment) => {
  return {
    type: UPDATE_ASSESSMENT,
    payload: assessment
  };
};
