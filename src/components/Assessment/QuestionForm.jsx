import React, { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddQuestion({ question, options, correctAnswer });
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectAnswer(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question"
        required
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
          placeholder={`Option ${index + 1}`}
          required
        />
      ))}
      <select value={correctAnswer} onChange={(e) => setCorrectAnswer(Number(e.target.value))}>
        {options.map((_, index) => (
          <option key={index} value={index}>Correct Option {index + 1}</option>
        ))}
      </select>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;
