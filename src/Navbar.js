import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../src/assets/charity.jpg"; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Logo" className="logo-img" />
      </a>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

