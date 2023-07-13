import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProgressChart = ({ data, options }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const createChart = () => {
      const ctx = chartRef.current.getContext('2d');

      // Create the chart instance
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options,
      });
    };

    const updateChart = () => {
      if (chartInstance) {
        // Update the chart with new data and options
        chartInstance.data = data;
        chartInstance.options = options;
        chartInstance.update();
      }
    };

    createChart();

    // Update the chart when data or options change
    updateChart();

    // Cleanup function
    return () => {
      if (chartInstance) {
        // Destroy the chart instance
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  }, [data, options]);

  return (
    <div>
      <h2>User's Progress Chart</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default ProgressChart;
