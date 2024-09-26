// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#282828] backdrop-blur-3xl shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">YourLogo</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-10">
            <NavLink to="/services" className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-200 hover:text-primary"}>
              Services
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-200 hover:text-primary"}>
              Pricing
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : "text-gray-200 hover:text-primary"}>
              About
            </NavLink>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className="px-4 py-2 bg-primary rounded-full text-white shadow hover:bg-primary-dark">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
