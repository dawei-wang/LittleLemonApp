import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/contact">Contact Us</Link>
    </nav>
  );
};

export default Nav;
