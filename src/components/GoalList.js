import React from 'react';

const GoalList = () => {
  // Assuming you have an array of goals
  const goals = ['Goal 1', 'Goal 2', 'Goal 3'];

  return (
    <div>
      <h2>List of Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList;
