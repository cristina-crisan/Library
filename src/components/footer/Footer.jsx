import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;
