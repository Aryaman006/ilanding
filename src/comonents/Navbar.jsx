'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex justify-center bg-[#f6f9fc] py-6 px-4">
      <nav className="bg-white fixed top-4 z-50 shadow-md rounded-full px-6 py-3 w-full max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-800">HireX</div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li><a href="#hero" className="text-blue-600 font-semibold">Home</a></li>
          <li><a href="#about">About</a></li>
          {/* <li><a href="#features">Features</a></li> */}
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>

          {/* <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Dropdown <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md py-2 px-4 z-50 min-w-[120px]">
                <a href="#option1" className="block py-1 hover:text-blue-600">Option 1</a>
                <a href="#option2" className="block py-1 hover:text-blue-600">Option 2</a>
              </div>
            )}
          </li> */}

          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
