import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const FilterBar = ({ categories, brands, setSelectedCategory, setSelectedBrand, setSortOrder, setPriceRange }) => {
  const [selectedSort, setSelectedSort] = useState('default');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    setSortOrder(e.target.value);
  };

  const handlePriceRangeChange = () => {
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <div className="flex flex-wrap gap-6 py-4 bg-gray-900 rounded-lg shadow-xl border-4 border-solid border-transparent bg-clip-padding border-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
      {/* Filter by Category (select box) */}
      <div className="flex flex-col">
        <h4 className="text-white font-semibold">Categories</h4>
        <select
          className="px-6 py-3 bg-gray-800 text-white rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by Brand (select box) */}
      <div className="flex flex-col">
        <h4 className="text-white font-semibold">Brand</h4>
        <select
          className="px-6 py-3 bg-gray-800 text-white rounded-lg border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Filter by Price Range (2 sliders: min and max) */}
      <div className="flex flex-col gap-4">
        <h4 className="text-white font-semibold">Price Range</h4>
        <div className="flex gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full bg-gradient-to-r from-yellow-500 to-red-500 rounded-lg focus:ring-2 focus:ring-purple-600 hover:border-white transition-all duration-200"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-gradient-to-r from-green-400 to-teal-500 rounded-lg focus:ring-2 focus:ring-purple-600 hover:border-white transition-all duration-200"
          />
        </div>
        <div className="flex justify-between text-white">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Sort by Price (Custom dropdown) */}
      <div className="flex flex-col">
        <h4 className="text-white font-semibold">Sort By</h4>
        <select
          className="px-6 py-3 bg-gray-800 text-white rounded-lg border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

// Add PropTypes to validate the props
FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
  brands: PropTypes.array.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setSelectedBrand: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setPriceRange: PropTypes.func.isRequired,
};

FilterBar.defaultProps = {
  categories: [],
  brands: [],
  setSelectedCategory: () => {},
  setSelectedBrand: () => {},
  setSortOrder: () => {},
  setPriceRange: () => {},
};

export default FilterBar;
