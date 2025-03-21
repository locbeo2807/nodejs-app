import { FaSearch } from "react-icons/fa";
import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full px-6 py-3 rounded-lg bg-gray-800 text-white border-2 border-transparent focus:border-pink-500 focus:ring-2 focus:ring-pink-500 placeholder:text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <FaSearch className="absolute right-4 top-3 text-gray-400 hover:text-pink-500 transition-all duration-300 ease-in-out" />
    </div>
  );
};

export default SearchBar;
