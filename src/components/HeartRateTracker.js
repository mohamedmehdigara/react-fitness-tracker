import React, { useState } from 'react';

const HeartRateTracker = () => {
  const [heartRate, setHeartRate] = useState(0);

  const handleHeartRateChange = (e) => {
    const value = parseInt(e.target.value);
    setHeartRate(value);
  };

  const handleSave = () => {
    // Add your logic to save the heart rate data to your backend or local storage
    console.log('Heart rate saved:', heartRate);
  };

  return (
    <div>
      <h3>Heart Rate Tracker</h3>
      <label>
        Heart Rate (bpm):
        <input
          type="number"
          value={heartRate}
          onChange={handleHeartRateChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default HeartRateTracker;
