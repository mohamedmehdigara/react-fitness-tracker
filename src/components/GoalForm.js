import React, { useState } from 'react';

const GoalForm = () => {
  const [goalName, setGoalName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission and set a fitness goal
    console.log('Fitness goal set:', goalName);
    setGoalName('');
  };

  const handleChange = (e) => {
    setGoalName(e.target.value);
  };

  return (
    <div>
      <h2>Set a Fitness Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={handleChange}
        />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;
