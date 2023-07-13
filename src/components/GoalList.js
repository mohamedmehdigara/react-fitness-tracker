import React from 'react';

const GoalList = () => {
  // Assuming you have an array of goals
  const goals = [
    { id: 1, name: 'Lose Weight', target: '10 kg' },
    { id: 2, name: 'Run a Marathon', target: '42 km' },
    { id: 3, name: 'Build Muscle', target: 'Increase strength' },
    // Add more goals as needed
  ];

  return (
    <div>
      <h2>List of Goals</h2>
      {goals.length > 0 ? (
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <h3>{goal.name}</h3>
              <p>Target: {goal.target}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No goals found.</p>
      )}
    </div>
  );
};

export default GoalList;
