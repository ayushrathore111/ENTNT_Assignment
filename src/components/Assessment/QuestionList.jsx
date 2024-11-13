import React from 'react';

const QuestionList = ({ questions }) => (
  <div>
    {questions.map((q, index) => (
      <div key={index}>
        <h3>{q.question}</h3>
        <ul>
          {q.options.map((option, idx) => (
            <li key={idx}>{option}</li>
          ))}
        </ul>
        <p>Correct Answer: Option {q.correctAnswer + 1}</p>
      </div>
    ))}
  </div>
);

export default QuestionList;
