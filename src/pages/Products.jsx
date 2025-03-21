import React, { useState } from "react";
import CardProduct from "../components/CardProduct";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

const products = [
  { id: 1, name: "Headphones", price: 99, category: "Electronics", image: "https://happyphone.vn/wp-content/uploads/2024/06/Tai-nghe-chup-tai-Bose-QuietComfort-Ultra-Headphones-Trang.png" },
  { id: 2, name: "Gaming Mouse", price: 49, category: "Accessories", image: "https://owlgaming.vn/wp-content/uploads/2024/02/chuot-gaming-zowie-u2-wireless.jpg" },
  { id: 3, name: "Keyboard", price: 79, category: "Accessories", image: "https://row.hyperx.com/cdn/shop/files/hyperx_alloy_core_rgb_es_1_top_down.jpg?v=1734473869" },
  { id: 4, name: "Smartwatch", price: 199, category: "Electronics", image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg" },
  { id: 5, name: "Laptop", price: 999, category: "Electronics", image: "https://hanoicomputercdn.com/media/product/75761_laptop_hp_14s_ep0110tu__8c5k9pa____2_.jpg" },
  { id: 6, name: "Phone", price: 799, category: "Electronics", image: "https://images.philips.com/is/image/philipsconsumer/a80d36adbe2d42829434b1be001e1d11?$pnglarge$&wid=1250" },
  { id: 7, name: "Camera", price: 350, category: "Accessories", image: "https://smartnew.vn/upload_images/images/2021/03/28/hikvision-16DOT.png" },
  { id: 8, name: "Mousepad", price: 15, category: "Accessories", image: "https://row.hyperx.com/cdn/shop/products/hyperx_fury_s_gaming_mouse_pad_speed_edition_cloth_xl_1_main_480x480.jpg?v=1662421091" }

];

const categories = ["All", "Electronics", "Accessories"];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-center text-3xl font-extrabold text-gradient bg-clip-text text-transparent mt-8 mb-4">
        🔥 Welcome to Products Page 🔥
      </h1>

      <div className="my-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <SearchBar setSearchQuery={setSearchQuery} />
        <FilterBar categories={categories} setSelectedCategory={setSelectedCategory} />
      </div>

      {/* Cập nhật Grid Layout với 4 sản phẩm mỗi hàng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <CardProduct key={product.id} product={product} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
