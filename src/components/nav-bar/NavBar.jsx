import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
  <div className="wrapper">
    <nav className="navbar vertical-align">
      <NavLink to="/books">Home</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/new-book">Add new book</NavLink>
    </nav>
    </div>
  );
};

export default NavBar;
