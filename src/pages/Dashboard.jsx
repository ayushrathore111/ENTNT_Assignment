import React, { useState } from 'react';
import JobList from '../components/JobPostings/JobList';
import JobPostForm from '../components/JobPostings/JobPostForm';
import '../static/Dashboard.css';
const Dashboard = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleEdit = job => setSelectedJob(job);
  const handleCancel = () => setSelectedJob(null);

  return (
    <div>
      <h1>Job Dashboard</h1>
      <JobPostForm selectedJob={selectedJob} onCancel={handleCancel} />
      <JobList onEdit={handleEdit} />
    </div>
  );
};

export default Dashboard;
