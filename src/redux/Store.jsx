import { createStore, combineReducers } from 'redux';
import jobReducer from './reducers/jobReducer';
import candidateReducer from './reducers/candidateReducer';
import assessmentReducer from './reducers/assessmentReducer';

const rootReducer = combineReducers({
  jobPostings: jobReducer,
  candidates: candidateReducer,
  assessments: assessmentReducer,
});

const store = createStore(rootReducer);

export default store;

