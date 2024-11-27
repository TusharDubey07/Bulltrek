import React from "react";

const Header = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">
          <span className="text-[#61001D]">Built</span>
          <span className="text-[#FF6B00]">trek</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="bg-[#FFF1E6] px-4 py-2 rounded-full text-sm font-medium"
        >
          Home
        </a>
        <a href="#" className="text-sm font-medium">
          Strategy
        </a>
        <a href="#" className="text-sm font-medium">
          About Us
        </a>
        <a href="#" className="text-sm font-medium">
          Contact Us
        </a>
      </div>

      <button className="bg-[#61001D] text-white hover:bg-[#61001D]/90 px-4 py-2 rounded">
        Signup
      </button>
    </nav>
  );
};

export default Header;
