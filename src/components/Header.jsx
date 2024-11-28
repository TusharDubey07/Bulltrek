import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from 'lucide-react';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img
            src="/images/Bulltrek Logo 1.png"
            alt="logo"
            className="mx-auto w-[137px] h-[44px]"
          />
        </NavLink>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium ${
              isActive
                ? "bg-[#FFDDB7] text-[#F59120]"
                : "hover:text-[#F59120]"
            }`
          }
        >
          Home
        </NavLink>
        <div className="relative">
          <button
            className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium hover:text-[#F59120]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Strategy
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <NavLink
                to="/broker"
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive
                      ? "bg-[#FFDDB7] text-[#F59120]"
                      : "hover:bg-gray-50 hover:text-[#F59120]"
                  }`
                }
                onClick={() => setIsDropdownOpen(false)}
              >
                Broker
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm ${
                    isActive
                      ? "bg-[#FFDDB7] text-[#F59120]"
                      : "hover:bg-gray-50 hover:text-[#F59120]"
                  }`
                }
                onClick={() => setIsDropdownOpen(false)}
              >
                Terms & Conditions
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium ${
              isActive
                ? "bg-[#FFDDB7] text-[#F59120]"
                : "hover:text-[#F59120]"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium ${
              isActive
                ? "bg-[#FFDDB7] text-[#F59120]"
                : "hover:text-[#F59120]"
            }`
          }
        >
          Contact Us
        </NavLink>
      </div>

      <button className="bg-[#61001D] text-white hover:bg-[#61001D]/90 px-4 py-2 rounded-full">
        Signup
      </button>
    </nav>
  );
};

export default Header;