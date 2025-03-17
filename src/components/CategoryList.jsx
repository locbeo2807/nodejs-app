// src/components/Category.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate từ react-router-dom
import laptopImage from "../assets/laptop.jpg";  
import pcImage from "../assets/pc.jpg";
import screenImage from "../assets/man.jpg";
import mainboardImage from "../assets/manboard.jpg";
import cpuImage from "../assets/cpu.jpg";
import vgaImage from "../assets/vga.jpg";
import ramImage from "../assets/ram.jpg";
import storageImage from "../assets/ocung.jpg";
import caseImage from "../assets/case.jpg";
import coolerImage from "../assets/tannhiet.jpg";
import "../css/categoryList.css";

const Category = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const categories = [
    { name: "Laptop", image: laptopImage },
    { name: "PC", image: pcImage },
    { name: "Màn hình", image: screenImage },
    { name: "Mainboard", image: mainboardImage },
    { name: "CPU", image: cpuImage },
    { name: "VGA", image: vgaImage },
    { name: "RAM", image: ramImage },
    { name: "Ổ cứng", image: storageImage },
    { name: "Case", image: caseImage },
    { name: "Tản nhiệt", image: coolerImage },
  ];

  // Hàm xử lý điều hướng khi nhấp vào danh mục
  const handleCategoryClick = () => {
    navigate("/products"); // Điều hướng đến trang Products
  };

  return (
    <div className="container mx-auto p-6 text-center mt-12">
      <h2 className="text-4xl font-extrabold text-white tracking-wider uppercase mb-6">
        Danh mục sản phẩm
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="category-card p-4 bg-gray-800 rounded-lg">
            <div
              onClick={handleCategoryClick} // Xử lý sự kiện onClick
              className="cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-lg text-white">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
