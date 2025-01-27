import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPinterest,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-[#1C4670] text-white py-2 px-6 flex justify-start items-center">
        <div className="ml-auto flex items-center text-[#E6ECFD] space-x-6 text-sm">
          <div className="flex items-center text-sm relative">
            <FaEnvelope className="mr-2" />
            <span>www.registerkaro.in</span>
            <div className="separator-line"></div>
          </div>
          <div className="flex items-center text-sm relative">
            <FaPhoneAlt className="mr-2 scale-x-[-1]" />
            <span>+918447746183</span>
            <div className="separator-line"></div>
          </div>
          <div className="flex space-x-3 text-[#E6ECFD]">
            <a href="https://www.instagram.com">
              <FaInstagram className="hover:text-gray-400" size={17.6} />
            </a>
            <a href="https://www.facebook.com">
              <FaFacebook className="hover:text-gray-400" size={17.6} />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className="hover:text-gray-400" size={17.6} />
            </a>
            <a href="https://www.pinterest.com">
              <FaPinterest className="hover:text-gray-400" size={17.6} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white flex justify-between items-center py-8 font-semibold text-[#272D37] h-[44px] px-10 border border-b-1 border-[#D1D1D199] ">
        <div className="w-[222px] h-[56.8px] mb-3">
          <img src="/assets/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>

        <ul className="flex space-x-8 items-center justify-end">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>

          <li className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:text-blue-500">
            <Link to="/services" className="hover:text-blue-500">
            <span className="mr-1">Our Services</span>
            </Link> 
              <FaChevronDown size={14} className={`transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
          
          </li>

          <li>
            <Link to="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
              Contact
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <FaSearch className="hover:text-gray-400" size={17.6} />
          </li>
          <li>
            <button className="bg-[#FFA229] p-2 font-bold text-white rounded">Talk An Expert</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
