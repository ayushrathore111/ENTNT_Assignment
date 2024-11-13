// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Your Recruitment Dashboard</h1>
        <p>Manage your candidates, assessments, and more from a single platform.</p>
        <Link to="/dashboard" className="btn-primary">Go to Dashboard</Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Candidate Management</h3>
            <p>Track and manage candidate information with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Job Assessments</h3>
            <p>Create, assign, and review job assessments seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Detailed Reporting</h3>
            <p>Get insights on recruitment metrics and performance.</p>
          </div>
        </div>
      </section>

      {/* Recent Assessments Section */}
      <section className="recent-assessments">
        <h2>Recent Job Assessments</h2>
        <ul>
          <li>
            <Link to="/assessment/1">Frontend Developer - Assessment</Link>
          </li>
          <li>
            <Link to="/assessment/2">Data Analyst - Assessment</Link>
          </li>
          <li>
            <Link to="/assessment/3">Project Manager - Assessment</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
