import React, { useState } from 'react';

const StepTracker = () => {
  const [stepCount, setStepCount] = useState(0);

  const handleStepChange = (e) => {
    const count = parseInt(e.target.value);
    setStepCount(count);
  };

  const handleSave = () => {
    // Add your logic to save the step count data to your backend or local storage
    console.log('Step count saved:', stepCount);
  };

  return (
    <div>
      <h3>Step Tracker</h3>
      <label>
        Step Count:
        <input
          type="number"
          value={stepCount}
          onChange={handleStepChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default StepTracker;
