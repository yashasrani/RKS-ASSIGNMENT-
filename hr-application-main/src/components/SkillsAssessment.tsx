import React, { useState } from 'react';

const SkillsAssessment: React.FC = () => {
  const [skillsAssessed, setSkillsAssessed] = useState(false);
  const [userSolution, setUserSolution] = useState('');
  const [assessmentResult, setAssessmentResult] = useState('');

  const correctSolution = 'function add(a, b) { return a + b; }';

  const assessSkills = () => {
    // Check if the user's solution matches the correct solution
    if (userSolution.trim() === correctSolution) {
      setAssessmentResult('Correct! Skills Assessed.');
      setSkillsAssessed(true);
    } else {
      setAssessmentResult('Incorrect solution. Try again.');
    }
  };

  return (
    <div>
      <h3>Skills Assessment</h3>
      {skillsAssessed ? (
        <p>{assessmentResult}</p>
      ) : (
        <div>
          <p>Solve the following coding challenge:</p>
          <p>Write a function named <strong>add</strong> that takes two parameters and returns their sum.</p>
          <textarea
            value={userSolution}
            onChange={(e) => setUserSolution(e.target.value)}
            placeholder="Write your solution here..."
            rows={6}
            cols={60}
            style={{ display: 'block', margin: '10px 0' }}
          />
          <button onClick={assessSkills}>Submit Solution</button>
          {assessmentResult && <p>{assessmentResult}</p>}
        </div>
      )}
    </div>
  );
};

export default SkillsAssessment;
