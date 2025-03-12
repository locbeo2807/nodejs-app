import React from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-darkBg text-white">
      <Navbar /> {/* ✅ Navbar always on top */}
      <main className="flex-grow">
        <Outlet /> {/* ✅ This renders the current page */}
      </main>
      <Footer /> {/* ✅ Footer always at bottom */}
    </div>
  );
};

export default Layout;
