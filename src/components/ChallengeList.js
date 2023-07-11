import React from 'react';

const ChallengeList = () => {
  // Assuming you have an array of challenges
  const challenges = ['Challenge 1', 'Challenge 2', 'Challenge 3'];

  return (
    <div>
      <h2>List of Challenges</h2>
      <ul>
        {challenges.map((challenge, index) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeList;
