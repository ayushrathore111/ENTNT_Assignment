import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CandidateList = ({ jobId }) => {
  const candidates = useSelector(state => state.candidates.filter(candidate => candidate.jobId === jobId));

  return (
    <div>
      {candidates.map(candidate => (
        <div key={candidate.id}>
          <Link to={`/candidate/${candidate.id}`}>{candidate.name}</Link>
          <p>{candidate.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
