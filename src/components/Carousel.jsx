import React from "react";
import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import '../css/Carousel.css'

const introImages = [
  "https://files.oaiusercontent.com/file-AehcbdKV8kownuWM1pfiFc?se=2025-03-10T10%3A55%3A27Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da9cb34cd-de16-4f91-80c1-452939c68fea.webp&sig=73Hvh5HVW7gHwzzs3Gh3u7Bpkex8YDQDZgXIIpsFm0Q%3D",
  "https://files.oaiusercontent.com/file-LuVyUbi9J5fHeeBfKnHzqa?se=2025-03-10T10%3A56%3A48Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dee85ee52-8957-48cf-990a-ee6951a8b533.webp&sig=8ls7oPm7w6RDVg68NnaGc%2B7GIz51xERcQBUZ4rJbLZw%3D",
  "https://files.oaiusercontent.com/file-CtZiQwAEDFSAXteZ3gpE7s?se=2025-03-10T10%3A57%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Da6ee54b1-07f1-4a8c-93e4-bfaa09ada1c2.webp&sig=A9DSDQTI0PyY7JSNYYRMESlbzQAdUZKkEnM6SBytcWM%3D",
  "https://files.oaiusercontent.com/file-AxM7fVgpkDkhAUjsBY8h9p?se=2025-03-10T10%3A57%3A51Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D11742864-421d-46aa-b5c7-646250e9d551.webp&sig=XOWWNXzTrVB7D4Yx5VNpDwkxCrtSKUpcIoba8UcRX4g%3D",
];

const Carousel = () => {
    const navigate = useNavigate(); // ✅ Hook điều hướng
  
    const handleRedirect = () => {
      navigate("/products"); // ✅ Chuyển hướng đến trang Products
    };
  
    return (
      <div className="carousel-container">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {introImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer" // ✅ Cho phép click
              onClick={handleRedirect} // ✅ Khi click vào slide, chuyển hướng luôn
            >
              {/* ✅ Ảnh nền */}
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image w-full h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Carousel;
