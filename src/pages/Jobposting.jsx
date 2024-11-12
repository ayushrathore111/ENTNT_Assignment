import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, deleteJob } from '../redux/Jobslices';
import { Button, TextField, List, ListItem, ListItemText } from '@mui/material';
import '../App.css';

function JobPostings() {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleAddJob = () => {
    const newJob = {
      id: jobs.length + 1,
      title: jobTitle,
      description: jobDescription,
      applicants: 0,
    };
    dispatch(addJob(newJob));
    setJobTitle('');
    setJobDescription('');
  };

  const handleDeleteJob = (jobId) => {
    dispatch(deleteJob(jobId));
  };

  return (
    <div className="container">
      <h3>Manage Job Postings</h3>
      <form>
        <TextField
          label="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <TextField
          label="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddJob}>
          Add Job
        </Button>
      </form>

      <List>
        {jobs.map((job) => (
          <ListItem key={job.id} className="card">
            <ListItemText primary={job.title} secondary={job.description} />
            <Button onClick={() => handleDeleteJob(job.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default JobPostings;
