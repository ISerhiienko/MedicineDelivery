import "./index.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import { ToastContainer } from "react-toastify";
import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
