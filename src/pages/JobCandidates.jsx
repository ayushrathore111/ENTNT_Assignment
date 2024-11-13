import React from 'react';
import { useSelector } from 'react-redux';
import CandidateList from '../components/Candidates/CandidateList';
import '../static/JobCandidates.css';
const JobCandidates = ({ jobId }) => {
  const candidates = useSelector(state => 
    state.candidates.filter(candidate => candidate.jobId === jobId)
  );

  return (
    <div>
      <h1>Candidates for Job ID: {jobId}</h1>
      <CandidateList candidates={candidates} />
    </div>
  );
};

export default JobCandidates;
