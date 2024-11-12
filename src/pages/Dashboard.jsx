import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  return (
    <div className="container">
      <h3>Admin Dashboard</h3>
      <div>
        <Link to="/job-postings">
          <button>Manage Job Postings</button>
        </Link>
      </div>
      <div>
        <Link to="/candidates">
          <button>Manage Candidates</button>
        </Link>
      </div>
      <div>
        <Link to="/assessments">
          <button>Create Job Assessments</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
