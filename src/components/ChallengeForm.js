import React, { useState } from 'react';

const ChallengeForm = () => {
  const [challengeName, setChallengeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission and create a new challenge
    console.log('Challenge created:', challengeName);
    setChallengeName('');
  };

  const handleChange = (e) => {
    setChallengeName(e.target.value);
  };

  return (
    <div>
      <h2>Create a New Challenge</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Challenge Name"
          value={challengeName}
          onChange={handleChange}
        />
        <button type="submit">Create Challenge</button>
      </form>
    </div>
  );
};

export default ChallengeForm;
