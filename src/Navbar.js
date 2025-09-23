import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../src/assets/charity.jpg"; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
      {/* <h1>Wanyetse Charity</h1> */}
        <img src={logo} alt="Logo" className="logo-img" />
        {/* <h1>Wanyetse Charity</h1> */}
      </a>

      <ul className="nav-links">
          
        <li><h2><Link to="/">Wanyetse  Charity</Link></h2></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/footer">Footer</Link></li> */}
      </ul>
    </nav>
  );
}

