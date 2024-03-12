import { Link, Outlet } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const { cart } = useCart();

  const drugsCount = cart.length;

  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="link">
          Shop
        </Link>
        <Link to="/cart" className="link">
          Shopping cart{" "}
          <span className="text-rose-500 font-bold">({drugsCount})</span>
        </Link>
      </nav>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
