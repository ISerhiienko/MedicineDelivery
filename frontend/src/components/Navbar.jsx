import { Link, Outlet } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="nav">
        <Link to="/" className="link">
          Shop
        </Link>
        <Link to="/cart" className="link">
          Shopping cart
        </Link>
      </nav>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
