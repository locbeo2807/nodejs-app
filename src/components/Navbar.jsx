import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faUserPlus, faHome, faBoxOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";
import { useUser } from "../context/UserContext"; // Import UserContext

const Navbar = () => {
  const { currentUser, logout } = useUser(); // Lấy thông tin người dùng từ UserContext

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-gray-950 text-white shadow-[0_0_15px_2px_rgba(255,0,127,0.5)] z-[100]">
      
      {/* Logo LB E-Shop */}
      <div className="flex items-center space-x-3">
        <img
          src="https://files.oaiusercontent.com/file-QoaeU2hRxq8diBwuwEEu1D?se=2025-03-10T11%3A19%3A11Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dddb90311-3488-459f-a7de-94cef768840c.webp&sig=TBxxrmfDkUZR1z8Cf/5ZW6zS/k4LoI6Uv0nkycXtXgI%3D"
          alt="E-Shop Logo"
          className="h-12 w-auto"
        />
        <h1 className="text-3xl font-bold text-neonPink">LB</h1>
      </div>

      {/* Menu */}
      <div className="flex space-x-8">
        {[{ icon: faHome, label: "Home", path: "/" }, { icon: faBoxOpen, label: "Products", path: "/products" }, { icon: faPhone, label: "Contact", path: "/contact" }].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="relative group flex items-center px-6 py-2 text-lg transition duration-300 hover:text-neonBlue cursor-pointer"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="mr-2 text-gray-400 group-hover:text-neonBlue transition duration-300"
            />
            <span className="relative text-white group-hover:text-neonBlue transition duration-300">
              {item.label}
              <span className="absolute inset-0 w-full h-full border-2 border-neonBlue rounded-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 animate-border-glow"></span>
            </span>
          </Link>
        ))}
      </div>

      {/* Hiển thị tên người dùng hoặc đăng nhập/đăng ký */}
      <div className="flex space-x-4">
        {currentUser ? (
          <>
            <span className="text-white">{currentUser.username}</span>
            <button
              onClick={logout}
              className="relative flex items-center bg-transparent border border-neonBlue px-4 py-2 rounded-md text-white hover:bg-neonBlue hover:text-white transition-all duration-300"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2 text-white group-hover:text-black transition duration-300" />
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="relative flex items-center bg-transparent border border-neonBlue px-4 py-2 rounded-md text-white hover:bg-neonBlue hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(0,217,255,0.75)]">
              <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-white group-hover:text-black transition duration-300" />
              Sign Up
            </Link>
            <Link to="/login" className="relative flex items-center bg-transparent border border-neonPink px-4 py-2 rounded-md text-white hover:bg-neonPink hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(255,0,127,0.75)]">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-white group-hover:text-black transition duration-300" />
              Login
            </Link>
          </>
        )}
        <Link to="/cart" className="relative bg-neonPink px-5 py-2 rounded-md shadow-[0_0_15px_2px_rgba(255,0,127,0.75)] hover:scale-110 hover:shadow-[0_0_25px_4px_rgba(255,0,127,1)] transition-all duration-300">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
