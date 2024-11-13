import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../static/CandidateList.css';

const CandidateList = ({ jobId }) => {
  const candidates = useSelector(state => state.candidates.filter(candidate => candidate.jobId === jobId));

  return (
    <div className="candidate-list-container">
      {candidates.map(candidate => (
        <div key={candidate.id} className="candidate-item">
          <Link to={`/candidate/${candidate.id}`}>{candidate.name}</Link>
          <p className="candidate-status">{candidate.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
