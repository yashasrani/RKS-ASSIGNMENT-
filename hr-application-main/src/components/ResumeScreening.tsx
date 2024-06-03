import React from 'react';

const ResumeScreening: React.FC = () => {
  const [resumeSubmitted, setResumeSubmitted] = React.useState(false);
  const [resume, setResume] = React.useState<string>('');

  const submitResume = () => {
    // Placeholder logic for submitting resume
    // Here you can implement your actual resume screening logic
    // For simplicity, let's assume the resume must contain the word "JavaScript"
    if (resume.toLowerCase().includes('javascript')) {
      setResumeSubmitted(true);
    } else {
      alert('Resume does not meet the criteria. Please include relevant skills such as JavaScript.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResume(e.target.value);
  };

  return (
    <div>
      <h3>Resume Screening</h3>
      {!resumeSubmitted ? (
        <div>
          <textarea rows={10} cols={50} value={resume} onChange={handleChange} placeholder="Please write something unique about you" />
          <br />
          <button onClick={submitResume}>Submit</button>
        </div>
      ) : (
        <p>Resume Submitted!</p>
      )}
    </div>
  );
};

export default ResumeScreening;
