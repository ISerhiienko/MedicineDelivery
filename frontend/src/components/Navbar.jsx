import { Link, NavLink, Outlet } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext.jsx";

const Navbar = () => {
  const { cart } = useCart();

  const drugsCount = cart.length;

  return (
    <div className="container">
      <nav className="nav">
        <NavLink to="/" className="link" activeClassName="active-link" exact>
          Shop
        </NavLink>
        <NavLink to="/cart" className="link" activeClassName="active-link">
          Shopping cart{" "}
          <span className="text-rose-500 font-bold">[{drugsCount}]</span>
        </NavLink>
        <NavLink to="/history" className="link" activeClassName="active-link">
          History
        </NavLink>
      </nav>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
