import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAssessment } from '../redux/actions/assessmentActions';
import QuestionForm from '../components/Assessment/QuestionForm';
import QuestionList from '../components/Assessment/QuestionList';
import '../static/JobAssessment.css';
const JobAssessment = ({ jobId }) => {
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch();

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const handleSave = () => {
    dispatch(addAssessment({ jobId, questions }));
  };

  return (
    <div>
      <h1>Create Assessment for Job ID: {jobId}</h1>
      <QuestionForm onAddQuestion={addQuestion} />
      <QuestionList questions={questions} />
      <button onClick={handleSave}>Save Assessment</button>
    </div>
  );
};

export default JobAssessment;
