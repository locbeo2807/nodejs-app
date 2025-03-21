import React, { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-screen-xl mx-auto p-8 bg-gray-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Product"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          {/* Product Name */}
          <h1 className="text-4xl font-semibold text-gradient">Asgaard Sofa</h1>

          {/* Product Price */}
          <p className="text-2xl mt-4">Rs. 250,000.00</p>

          {/* Rating */}
          <div className="flex items-center my-3">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-yellow-400 ${index < 4 ? "fill-current" : ""}`}
              />
            ))}
            <span className="ml-2 text-gray-400">(5 Customer Reviews)</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-400 mt-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio that boasts clear midrange and extended highs for a sound.
          </p>

          {/* Quantity Selector */}
          <div className="my-6">
            <h4 className="text-lg font-semibold">Quantity</h4>
            <div className="flex items-center gap-4 mt-2">
              <button onClick={() => setQuantity(quantity - 1)} className="px-4 py-2 bg-gray-800 text-white rounded-full">
                -
              </button>
              <input
                type="number"
                value={quantity}
                min="1"
                className="w-16 px-4 py-2 bg-gray-800 text-white rounded-lg text-center"
                readOnly
              />
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-gray-800 text-white rounded-full">
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mt-6">
            <FaShoppingCart className="inline mr-2" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products (Skeleton/Placeholder) */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 text-gradient">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Placeholder product cards */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
              <div className="w-full h-40 bg-gray-700 mb-4 rounded-lg"></div>
              <div className="h-6 bg-gray-700 w-3/4 mb-2 rounded"></div>
              <div className="h-4 bg-gray-700 w-1/2 mb-4 rounded"></div>
              <div className="h-6 bg-gray-700 w-1/2 mb-4 rounded"></div>
              <button className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mt-4">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Shipping & Returns */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4 text-gradient">Shipping & Returns</h3>
        <p className="text-gray-400">
          Free shipping on all orders! Returns accepted within 30 days. View full return policy.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
