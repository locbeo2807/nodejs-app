import React from "react";

const Background = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-[#060b23] via-[#1c1130] to-[#3d0e40]">
      {/* Hiệu ứng ánh sáng neon xanh và hồng */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-neonPink blur-[120px] opacity-50 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neonBlue blur-[120px] opacity-50 rounded-full"></div>
    </div>
  );
};

export default Background;
