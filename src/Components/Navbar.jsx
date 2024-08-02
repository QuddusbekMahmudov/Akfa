import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logo.webp";
import x from "../Img/ximg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
