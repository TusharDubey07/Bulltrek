import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <NavLink to="/">
          <img
            src="/src/assets/Bulltrek Logo 1.png"
            alt="logo"
            className="mx-auto w-[100px] h-[40px]"
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
        <NavLink
          to="/strategy"
          className={({ isActive }) =>
            `px-4 py-2 rounded-full text-sm font-medium ${
              isActive
                ? "bg-[#FFDDB7] text-[#F59120]"
                : "hover:text-[#F59120]"
            }`
          }
        >
          Strategy
        </NavLink>
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

      <button className="bg-[#61001D] text-white hover:bg-[#61001D]/90 px-4 py-2 rounded">
        Signup
      </button>
    </nav>
  );
};

export default Header;