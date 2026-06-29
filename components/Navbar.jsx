"use client";

import { useState } from "react";
import { FaCube, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <FaCube className="text-[#1F4D3D] text-3xl" />
          <h1 className="text-2xl font-bold text-slate-900">
            Nexsora Studio
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-slate-700 font-medium">
          <li>
            <a href="#" className="hover:text-[#1F4D3D] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#1F4D3D] transition">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-[#1F4D3D] transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#1F4D3D] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#1F4D3D]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-6 text-slate-700 font-medium">

            <li>
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1F4D3D]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1F4D3D]"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1F4D3D]"
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#1F4D3D]"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}