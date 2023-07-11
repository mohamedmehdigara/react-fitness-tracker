import React, { useState } from 'react';

const WorkoutTracker = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [duration, setDuration] = useState(0);

  const handleWorkoutNameChange = (e) => {
    setWorkoutName(e.target.value);
  };

  const handleDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setDuration(value);
  };

  const handleSave = () => {
    // Add your logic to save the workout data to your backend or local storage
    console.log('Workout saved:', { workoutName, duration });
  };

  return (
    <div>
      <h3>Workout Tracker</h3>
      <label>
        Workout Name:
        <input
          type="text"
          value={workoutName}
          onChange={handleWorkoutNameChange}
        />
      </label>
      <label>
        Duration (minutes):
        <input
          type="number"
          value={duration}
          onChange={handleDurationChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default WorkoutTracker;
