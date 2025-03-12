import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Điều hướng sau khi đăng nhập
import { useUser } from "../context/UserContext"; // Import UserContext
import "../css/Form.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Lưu thông báo lỗi
  const [isSubmitting, setIsSubmitting] = useState(false); // Để hiển thị loading khi đang đăng nhập
  const navigate = useNavigate();
  const { login } = useUser(); // Lấy hàm login từ UserContext

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Kiểm tra nếu có trường nào bị bỏ trống
    if (!formData.email || !formData.password) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      return false;
    }

    // Kiểm tra email có đúng định dạng không
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Email không hợp lệ!");
      return false;
    }

    setErrorMessage(""); // Reset lỗi
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Kiểm tra lại form trước khi submit

    setIsSubmitting(true); // Bật loading

    // Giả lập gọi API login (Có thể thay bằng API thật khi làm backend)
    setTimeout(() => {
      const isLoggedIn = login(formData.email, formData.password); // Giả lập đăng nhập thành công
      if (isLoggedIn) {
        alert("Login Successful!");
        navigate("/"); // Điều hướng đến trang Home
      } else {
        setErrorMessage("Sai email hoặc mật khẩu. Vui lòng thử lại.");
      }
      setIsSubmitting(false); // Tắt loading
    }, 1000); // Giả lập thời gian xử lý login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-darkBg">
      <div className="neon-form w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="neon-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="neon-input"
            required
          />
          
          {/* Hiển thị thông báo lỗi nếu có */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button 
            type="submit" 
            className="neon-btn"
            disabled={isSubmitting} // Vô hiệu hóa nút khi đang đăng nhập
          >
            {isSubmitting ? "Đang đăng nhập..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
