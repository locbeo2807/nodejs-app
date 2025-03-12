import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Điều hướng sau khi đăng ký
import { useUser } from "../context/UserContext"; // Import UserContext
import bcrypt from "bcryptjs"; // Để hash mật khẩu
import zxcvbn from "zxcvbn"; // Để kiểm tra độ mạnh mật khẩu
import "../css/Form.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0); // Mức độ mạnh của mật khẩu
  const [isPasswordStrong, setIsPasswordStrong] = useState(false); // Kiểm tra nếu mật khẩu đủ mạnh
  const [errorMessage, setErrorMessage] = useState(""); // Để hiển thị lỗi nếu có
  const { register } = useUser(); // Lấy hàm đăng ký từ UserContext
  const navigate = useNavigate(); // Điều hướng sau khi đăng ký thành công

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      const result = zxcvbn(e.target.value); // Kiểm tra mật khẩu
      setPasswordStrength(result.score); // Lấy độ mạnh mật khẩu
      setIsPasswordStrong(result.score >= 3); // Mật khẩu đủ mạnh nếu điểm >= 3
    }
  };

  const validateForm = () => {
    // Kiểm tra nếu có trường nào bị bỏ trống
    if (!formData.email || !formData.username || !formData.password) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      return false;
    }

    // Kiểm tra email có đúng định dạng không
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Email không hợp lệ!");
      return false;
    }

    // Nếu mật khẩu yếu
    if (formData.password && !isPasswordStrong) {
      setErrorMessage("Mật khẩu quá yếu. Vui lòng chọn mật khẩu mạnh hơn.");
      return false;
    }

    setErrorMessage(""); // Reset lỗi
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Kiểm tra lại form trước khi submit

    // Hash mật khẩu trước khi lưu
    const hashedPassword = bcrypt.hashSync(formData.password, 10);

    // Gọi hàm đăng ký từ UserContext và lưu thông tin
    if (register(formData.username, formData.email, hashedPassword)) {
      alert("Đăng ký thành công!");
      navigate("/login"); // Chuyển hướng tới trang đăng nhập sau khi đăng ký thành công
    } else {
      setErrorMessage("Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-darkBg">
      <div className="neon-form w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
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
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
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

          {/* Hiển thị trạng thái độ mạnh mật khẩu */}
          {formData.password && passwordStrength === 0 && <p className="text-red-500">Mật khẩu quá yếu</p>}
          {formData.password && passwordStrength === 1 && <p className="text-yellow-500">Mật khẩu yếu</p>}
          {formData.password && passwordStrength === 2 && <p className="text-orange-500">Mật khẩu trung bình</p>}
          {formData.password && passwordStrength === 3 && <p className="text-green-500">Mật khẩu mạnh</p>}

          {/* Hiển thị thông báo lỗi */}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button type="submit" className="neon-btn" disabled={!isPasswordStrong}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
