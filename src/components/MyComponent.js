import React from 'react';
import ProgressChart from './ProgressChart';

const MyComponent = () => {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Steps',
        data: [5000, 6000, 5500, 7000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <ProgressChart data={chartData} options={chartOptions} />
    </div>
  );
};

export default MyComponent;
