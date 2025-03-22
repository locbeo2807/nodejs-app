import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import RecentOrders from "../components/RecentOrders";
import SalesAnalytics from "../components/SalesAnalytics";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa";  // User Icon
import "../css/AdminDashboard.css";

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(true);  // Default dark mode
  const [user, setUser] = useState("Admin");  // Logged-in user (for illustration)

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          {/* Top Bar with theme toggle */}
          <div className="top-bar flex justify-between p-4 bg-darkBg text-white">
            <div className="logo">Admin Dashboard</div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="theme-toggle">
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <div className="user-icon">
                <FaUserCircle size={30} />
                <span className="ml-2">{user}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-cards flex space-x-4 p-4">
            <StatsCard title="Total Sales" value="$25,024" percentage="81%" />
            <StatsCard title="Total Expenses" value="$14,160" percentage="62%" />
            <StatsCard title="Total Income" value="$10,864" percentage="44%" />
          </div>

          {/* Recent Orders Table */}
          <div className="recent-orders p-4">
            <h2 className="text-2xl font-bold">Recent Orders</h2>
            <RecentOrders />
          </div>

          {/* Sales Analytics */}
          <div className="sales-analytics p-4">
            <h2 className="text-2xl font-bold">Sales Analytics</h2>
            <SalesAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
