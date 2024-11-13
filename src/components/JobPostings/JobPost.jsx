import React from 'react';
import '../../static/JobPost.css';
const JobPost = ({ job, onEdit, onDelete }) => (
  <div>
    <h2>{job.title}</h2>
    <p>{job.description}</p>
    <button onClick={() => onEdit(job)}>Edit</button>
    <button onClick={() => onDelete(job.id)}>Delete</button>
  </div>
);

export default JobPost;
