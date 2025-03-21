import React from "react";
const CardProduct = ({ product }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          {/* Đảm bảo ảnh có tỷ lệ thích hợp */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-40 object-contain rounded-lg transition-transform transform hover:scale-110"
          />
          {/* Đảm bảo tên sản phẩm hiển thị rõ ràng */}
          <div className="mt-3">
            <h3 className="text-xl font-bold text-white text-center">{product.name}</h3>
          </div>
          <p className="text-yellow-400 font-bold text-lg text-center">${product.price}</p>
          <button className="mt-2 w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-red-500 text-white py-2 rounded-md transition transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      );
    };
  export default CardProduct;
  