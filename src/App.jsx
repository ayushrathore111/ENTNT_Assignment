import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import JobPostings from './pages/Jobposting';
import Candidates from './pages/Candidates';
import Assessments from './pages/Assessments';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/job-postings" element={<JobPostings />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/assessments" element={<Assessments />} />
      </Routes>
    </div>
  );
}

export default App;
