import React from "react";
import { Routes, Route } from "react-router-dom"; // No need for BrowserRouter here
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
  return (
    <Routes> {/* Manage routes here */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
