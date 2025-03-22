import React from "react";
import { FaChartBar, FaBox, FaUsers, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar bg-darkBg text-white w-64 p-6">
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
      <ul>
        <li className="mb-4"><FaChartBar /> Dashboard</li>
        <li className="mb-4"><FaBox /> Products</li>
        <li className="mb-4"><FaUsers /> Customers</li>
        <li className="mb-4"><FaCog /> Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
