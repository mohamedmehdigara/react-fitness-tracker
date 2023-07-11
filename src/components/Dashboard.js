import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [goals, setGoals] = useState([]);
  const [totalSteps, setTotalSteps] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [distanceCovered, setDistanceCovered] = useState(0);

  // Fetch user data from backend or use placeholder data
  useEffect(() => {
    // Simulating data fetching with setTimeout
    setTimeout(() => {
      const fetchedGoals = [
        { id: 1, name: 'Goal 1', target: 10000 },
        { id: 2, name: 'Goal 2', target: 5000 },
      ];
      const fetchedTotalSteps = 7500;
      const fetchedCaloriesBurned = 500;
      const fetchedDistanceCovered = 5.2;

      setGoals(fetchedGoals);
      setTotalSteps(fetchedTotalSteps);
      setCaloriesBurned(fetchedCaloriesBurned);
      setDistanceCovered(fetchedDistanceCovered);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>

      <h3>Goals</h3>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.name} - Target: {goal.target} steps</li>
        ))}
      </ul>

      <h3>Statistics</h3>
      <p>Total Steps Taken: {totalSteps}</p>
      <p>Calories Burned: {caloriesBurned}</p>
      <p>Distance Covered: {distanceCovered} km</p>

      {/* Add progress tracker and other components */}
    </div>
  );
};

export default Dashboard;
