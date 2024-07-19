"use client";
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex-shrink-0">
          <img src="/Images/logo.png" alt="Logo" className="h-16 w-16" />
        </div>

        {/* Navigation Links Container for Larger Screens */}
        <div className="hidden md:flex flex-grow justify-end space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/Flight" className="text-gray-700 hover:text-blue-500">Flight</a>
          <a href="/Hotel" className="text-gray-700 hover:text-blue-500">Hotel</a>
          <a href="/Payment" className="text-gray-700 hover:text-blue-500">Payments</a>
          <a href="/Login" className="text-gray-700 hover:text-blue-500">Login</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden flex flex-col space-y-4 mt-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
        <a href="/Flight" className="text-gray-700 hover:text-blue-500">Flight</a>
        <a href="/Hotel" className="text-gray-700 hover:text-blue-500">Hotel</a>
        <a href="/Payment" className="text-gray-700 hover:text-blue-500">Payments</a>
        <a href="/Login" className="text-gray-700 hover:text-blue-500">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
