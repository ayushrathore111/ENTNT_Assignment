// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import JobAssessment from './pages/JobAssessment';
import JobCandidates from './pages/JobCandidates';
import CandidateDetails from './components/Candidates/CandidateDetails';
import Home from './components/Home';
console.log("App component loaded");


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment/:jobId" element={<JobAssessment />} />
        <Route path="/candidates/:jobId" element={<JobCandidates />} />
        <Route path="/candidate/:id" element={<CandidateDetails />} />
      </Routes>
    </div>
  );
}

export default App;
