import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesAnalytics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: "Sales",
        data: [5000, 10000, 15000, 20000],
        borderColor: "#FF5733",
        backgroundColor: "rgba(255, 87, 51, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="w-full h-96">
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default SalesAnalytics;
