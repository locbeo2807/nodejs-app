import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-router-dom"; // Dùng Link để chuyển trang
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel"; 
import CategoryList from "../components/CategoryList"; 
import Product from "../components/Product"; 
import "../css/Home.css";

const Home = () => {
  return (
    <motion.div
      initial={{ rotateY: 90 }}  // Bắt đầu với góc quay Y 90 độ
      animate={{ rotateY: 0 }}   // Cuối cùng quay về 0 độ
      exit={{ rotateY: -90 }}    // Khi chuyển đi, quay về góc -90 độ
      transition={{ duration: 1 }} // Thời gian chuyển đổi
      className="relative min-h-screen bg-darkBg text-white"
    >
      <Navbar />
      <Carousel />
      <CategoryList />

      <div className="product-section">
        <Product />
      </div>
    </motion.div>
  );
};

export default Home;
