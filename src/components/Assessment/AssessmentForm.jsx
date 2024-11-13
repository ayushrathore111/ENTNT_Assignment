import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAssessment } from '../../redux/actions/assessmentActions';
import '../../static/AssessmentForm.css';

const AssessmentForm = ({ jobId }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const dispatch = useDispatch();

  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion('');
  };

  const handleSubmit = () => {
    dispatch(addAssessment({ jobId, questions }));
  };

  return (
    <div className="assessment-form-container">
      <input 
        value={currentQuestion} 
        onChange={e => setCurrentQuestion(e.target.value)} 
        placeholder="Question" 
      />
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={handleSubmit}>Save Assessment</button>

      <div className="questions-list">
        {questions.map((question, index) => (
          <div key={index} className="question-item">
            {index + 1}. {question}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentForm;
