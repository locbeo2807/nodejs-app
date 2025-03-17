import React from "react";
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa"; // Import các icon từ react-icons
import Countdown from "./Countdown"; // Import Countdown component
import "../css/Product.css";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 99.99,
      discountPrice: 79.99,
      discount: "20%",
      image:
        "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/a/samsung-galaxy-watch-fe_4_.png",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 120.0,
      discountPrice: 100.0,
      discount: "20%",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWxJxdMRyUIpzgDkimGilg9gbup2IPQJHvg&s",
    },
    {
      id: 3,
      name: "Headphones",
      price: 89.99,
      discountPrice: 70.0,
      discount: "20%",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71St1R5DFGL.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-6 text-center mt-12">
      {/* Hot Products Section */}
      <div className="hot-products-section flex justify-between items-center mb-6 p-6 bg-blue-400 rounded-md">
        <h2 className="hot-products-title">🔥 Hot Products 🔥</h2>
        <Countdown />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card relative p-4 bg-gray-800 rounded-lg overflow-hidden"
          >
            {/* Hiển thị ảnh sản phẩm */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain mb-4"
            />
            {/* Hiển thị thông báo giảm giá */}
            <div className="discount">{product.discount}</div>
            <div className="product-info">
              {/* Tên sản phẩm */}
              <h3 className="product-name">{product.name}</h3>
              {/* Giá cũ và giá giảm */}
              <p className="product-price">${product.price}</p>
              <p className="product-discounted-price">${product.discountPrice}</p>
              {/* Nút mua */}
              <button className="buy-now-btn bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="features-section bg-gray-100 py-8 mt-12 rounded-md">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="feature-item text-center">
            <FaTrophy className="mx-auto mb-4 text-4xl text-blue-500" />
            <h4 className="font-semibold">High Quality</h4>
            <p>Crafted from top materials</p>
          </div>
          <div className="feature-item text-center">
            <FaShieldAlt className="mx-auto mb-4 text-4xl text-blue-500" />
            <h4 className="font-semibold">Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>
          <div className="feature-item text-center">
            <FaShippingFast className="mx-auto mb-4 text-4xl text-blue-500" />
            <h4 className="font-semibold">Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>
          <div className="feature-item text-center">
            <FaHeadset className="mx-auto mb-4 text-4xl text-blue-500" />
            <h4 className="font-semibold">24/7 Support</h4>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
