import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssessment } from '../redux/Assessmentslices';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import '../App.css';

function Assessments() {
  const jobs = useSelector((state) => state.jobs);
  const assessments = useSelector((state) => state.assessments);
  const dispatch = useDispatch();
  const [assessmentTitle, setAssessmentTitle] = useState('');
  const [jobId, setJobId] = useState('');
  const [question, setQuestion] = useState('');

  const handleCreateAssessment = () => {
    const newAssessment = {
      id: assessments.length + 1,
      jobId,
      title: assessmentTitle,
      question,
    };
    dispatch(addAssessment(newAssessment));
    setAssessmentTitle('');
    setQuestion('');
  };

  return (
    <div className="container">
      <h3>Create Job Assessment</h3>
      <form>
        <TextField
          label="Assessment Title"
          value={assessmentTitle}
          onChange={(e) => setAssessmentTitle(e.target.value)}
        />
        <select value={jobId} onChange={(e) => setJobId(e.target.value)}>
          <option value="">Select Job</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>{job.title}</option>
          ))}
        </select>
        <TextField
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleCreateAssessment}>
          Create Assessment
        </Button>
      </form>

      <List>
        {assessments.map((assessment) => (
          <ListItem key={assessment.id} className="card">
            <ListItemText primary={assessment.title} secondary={`Job ID: ${assessment.jobId}, Question: ${assessment.question}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Assessments;
