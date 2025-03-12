import React from "react";
import Navbar from "../components/Navbar"; 
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";  // ✅ Import carousel giới thiệu
import "../css/Home.css";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 99.99,
      image:
        "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/a/samsung-galaxy-watch-fe_4_.png",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 120.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWxJxdMRyUIpzgDkimGilg9gbup2IPQJHvg&s",
    },
    {
      id: 3,
      name: "Headphones",
      price: 89.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71St1R5DFGL.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen bg-darkBg text-white">
      <Navbar />
  
      {/* ✅ Giữ Carousel nhưng giới hạn chiều cao */}
      <div className="w-full overflow-hidden">
        <Carousel />
      </div>
  
      {/* ✅ Thêm tiêu đề "Hot Products" phía trên danh sách sản phẩm */}
      <div className="container mx-auto p-6 text-center mt-6">
        <h2 className="text-4xl font-extrabold text-white tracking-wider uppercase mb-6 animate-glow">
          🔥 Hot Products 🔥
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
