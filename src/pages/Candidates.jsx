import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate, updateCandidateStatus } from '../redux/Candidateslices';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import '../App.css';

function Candidates() {
  const candidates = useSelector((state) => state.candidates);
  const dispatch = useDispatch();
  const [candidateName, setCandidateName] = useState('');
  const [resumeLink, setResumeLink] = useState('');

  const handleAddCandidate = () => {
    const newCandidate = {
      id: candidates.length + 1,
      name: candidateName,
      resume: resumeLink,
      status: 'Under Review',
    };
    dispatch(addCandidate(newCandidate));
    setCandidateName('');
    setResumeLink('');
  };

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateCandidateStatus({ id, status: newStatus }));
  };

  return (
    <div className="container">
      <h3>Manage Candidates</h3>
      <form>
        <TextField
          label="Candidate Name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
        />
        <TextField
          label="Resume Link"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddCandidate}>
          Add Candidate
        </Button>
      </form>

      <List>
        {candidates.map((candidate) => (
          <ListItem key={candidate.id} className="card">
            <ListItemText primary={candidate.name} secondary={candidate.resume} />
            <Button onClick={() => handleStatusChange(candidate.id, 'Interview Scheduled')}>Schedule Interview</Button>
            <Button onClick={() => handleStatusChange(candidate.id, 'Rejected')}>Reject</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Candidates;
