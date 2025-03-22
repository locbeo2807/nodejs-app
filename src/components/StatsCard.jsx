import React from "react";

const StatsCard = ({ title, value, percentage }) => {
  return (
    <div className="stats-card bg-gray-800 text-white p-6 rounded-lg w-1/4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-3xl">{value}</p>
      <p className="text-green-500">{percentage} in the last 24 hours</p>
    </div>
  );
};

export default StatsCard;
