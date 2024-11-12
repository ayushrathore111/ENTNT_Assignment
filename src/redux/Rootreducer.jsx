import { combineReducers } from 'redux';
import jobReducer from './Jobslices';
import candidateReducer from './Candidateslices';
import assessmentReducer from './Assessmentslices';

const rootReducer = combineReducers({
  jobs: jobReducer,
  candidates: candidateReducer,
  assessments: assessmentReducer,
});

export default rootReducer;
