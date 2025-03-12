import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 shadow-[0_0_20px_2px_rgba(0,217,255,0.5)] transform hover:scale-105 transition duration-300 relative overflow-hidden">
      
      {/* Hiệu ứng phản chiếu */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-10 pointer-events-none"></div>

      {/* Khung chứa hình sản phẩm có nền đậm để đồng nhất */}
      <div className="w-full h-52 flex justify-center items-center bg-gray-800 rounded-md overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full object-contain transition duration-300 transform hover:scale-110" />
      </div>
      
      <h3 className="text-xl font-bold mt-3 text-white">{product.name}</h3>
      <p className="text-neonBlue font-semibold">${product.price}</p>
      
      {/* Nút bấm có hiệu ứng phát sáng */}
      <button className="mt-4 w-full bg-neonPink text-white py-2 rounded-md shadow-[0_0_15px_2px_rgba(255,0,127,0.75)] transform hover:scale-110 hover:shadow-[0_0_25px_4px_rgba(255,0,127,1)] transition">
        Add to Cart
      </button>

      {/* Badge "Hot" với hiệu ứng sáng */}
      <div className="absolute -top-2 -right-2 bg-neonPink px-3 py-1 text-sm rounded-full text-white shadow-[0_0_10px_rgba(255,0,127,1)]">
        🔥 Hot
      </div>
    </div>
  );
};

export default ProductCard;
