import React, { useState } from 'react';

const DistanceTracker = () => {
  const [distance, setDistance] = useState(0);

  const handleDistanceChange = (e) => {
    const value = parseFloat(e.target.value);
    setDistance(value);
  };

  const handleSave = () => {
    // Add your logic to save the distance data to your backend or local storage
    console.log('Distance saved:', distance);
  };

  return (
    <div>
      <h3>Distance Tracker</h3>
      <label>
        Distance (km):
        <input
          type="number"
          step="0.01"
          value={distance}
          onChange={handleDistanceChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DistanceTracker;
