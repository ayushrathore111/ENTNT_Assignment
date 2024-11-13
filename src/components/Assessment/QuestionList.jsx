import React from 'react';
import '../../static/QuestionList.css';

const QuestionList = ({ questions }) => (
  <div className="question-list-container">
    {questions.map((q, index) => (
      <div key={index} className="question-item">
        <h3>{q.question}</h3>
        <ul>
          {q.options.map((option, idx) => (
            <li key={idx}>{option}</li>
          ))}
        </ul>
        <p className="correct-answer">Correct Answer: Option {q.correctAnswer + 1}</p>
      </div>
    ))}
  </div>
);

export default QuestionList;
