import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteJob } from '../../redux/actions/jobPostingActions';
import '../../static/JobList.css';
const JobList = ({ onEdit }) => {
  const jobPostings = useSelector(state => state.jobPostings);
  const dispatch = useDispatch();

  return (
    <div>
      {jobPostings.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <button onClick={() => onEdit(job)}>Edit</button>
          <button onClick={() => dispatch(deleteJob(job.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
