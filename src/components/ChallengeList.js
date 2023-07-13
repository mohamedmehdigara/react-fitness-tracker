import React from 'react';

const ChallengeList = () => {
  // Assuming you have an array of challenges
  const challenges = [
    { id: 1, name: '30-Day Plank Challenge', description: 'Master the plank exercise with this 30-day challenge.' },
    { id: 2, name: 'Couch to 5K', description: 'Train and prepare yourself to run a 5K race in just a few weeks.' },
    { id: 3, name: 'Push-Up Challenge', description: 'Increase your upper body strength with this push-up challenge.' },
    // Add more challenges as needed
  ];

  return (
    <div>
      <h2>List of Challenges</h2>
      {challenges.length > 0 ? (
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge.id}>
              <h3>{challenge.name}</h3>
              <p>{challenge.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No challenges found.</p>
      )}
    </div>
  );
};

export default ChallengeList;
