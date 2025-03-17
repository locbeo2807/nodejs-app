import React from "react";
import Slider from "react-slick"; // Import Slider từ react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const carouselImages = [
    "/carousel1.webp",
    "/carousel2.webp",
    "/carousel3.webp",
    "/carousel4.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {carouselImages.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`carousel-image-${index}`}
              className="w-full h-auto object-cover" // Sử dụng object-contain để ảnh nhỏ lại mà không bị cắt xén
              style={{ maxHeight: '88vh' }}  // Thu nhỏ ảnh xuống 80% chiều cao màn hình
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
