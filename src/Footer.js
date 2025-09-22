import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <p className="mb-3">© 2025 Charity Wanyetse. All Rights Reserved.</p>

        <div className="space-x-4 mb-3">
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#projects" className="hover:text-teal-400">Projects</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </div>

        <div className="space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-teal-400">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
