import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob, editJob } from '../../redux/actions/jobPostingActions';
import '../../static/JobPostForm.css';
const JobPostForm = ({ selectedJob, onCancel }) => {
  const [title, setTitle] = useState(selectedJob ? selectedJob.title : '');
  const [description, setDescription] = useState(selectedJob ? selectedJob.description : '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (selectedJob) {
      dispatch(editJob({ ...selectedJob, title, description }));
    } else {
      dispatch(addJob({ id: Date.now(), title, description }));
    }
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Job Title" />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Job Description" />
      <button type="submit">{selectedJob ? 'Update Job' : 'Add Job'}</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default JobPostForm;
