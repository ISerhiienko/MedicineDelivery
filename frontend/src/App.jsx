import "./index.css";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.jsx";
import { ToastContainer } from "react-toastify";
import React from "react";
import HistoryPage from "./pages/HistoryPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ShopPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
