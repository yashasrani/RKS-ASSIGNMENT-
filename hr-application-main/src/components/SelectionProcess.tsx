import React, { useState } from 'react';
import ResumeScreening from './ResumeScreening';
import SkillsAssessment from './SkillsAssessment';
import Interview from './Interview';

const SelectionProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: <ResumeScreening />, label: 'Resume Screening' },
    { component: <SkillsAssessment />, label: 'Skills Assessment' },
    { component: <Interview />, label: 'Interview' },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <h2>Selection Process - Step {currentStep + 1}: {steps[currentStep].label}</h2>
      {steps[currentStep].component}
      <div>
        <button onClick={prevStep} disabled={currentStep === 0}>Previous</button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default SelectionProcess;
