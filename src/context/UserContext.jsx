import React, { createContext, useContext, useState } from "react";
import bcrypt from "bcryptjs";

// Tạo context User
const UserContext = createContext();

// UserContext.js
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null); // Dùng để lưu thông tin người dùng hiện tại
  
    const register = (username, email, password) => {
      const newUser = { username, email, password };
      setUsers([...users, newUser]);
      setCurrentUser(newUser); // Lưu người dùng khi đăng ký
      return true;
    };
  
    const login = (email, password) => {
      const user = users.find((u) => u.email === email && bcrypt.compareSync(password, u.password));
      if (user) {
        setCurrentUser(user);
        return true;
      }
      return false;
    };
  
    const logout = () => {
      setCurrentUser(null);
    };
  
    return (
      <UserContext.Provider value={{ users, currentUser, register, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
  

// Hook để sử dụng UserContext
export const useUser = () => useContext(UserContext);
