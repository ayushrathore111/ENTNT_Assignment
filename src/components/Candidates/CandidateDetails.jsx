import React from 'react';
import '../../static/CandidateDetails.css'
const CandidateDetails = ({ candidate }) => (
  <div>
    <h2>{candidate.name}</h2>
    <p>Email: {candidate.email}</p>
    <p>Contact: {candidate.contact}</p>
    <p>Skills: {candidate.skills.join(', ')}</p>
    <p>Experience: {candidate.experience} years</p>
    <a href={candidate.resumeLink} target="_blank" rel="noopener noreferrer">Download Resume</a>
    <p>Status: {candidate.status}</p>
    <button onClick={() => alert('Status updated')}>Update Status</button>
  </div>
);

export default CandidateDetails;
