import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-900/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a 
          href="#" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:scale-105"
        >
          MOHCINE DEV
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a 
              href="#home" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-y-[-2px] inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-y-[-2px] inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-y-[-2px] inline-block"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button 
            onClick={() => setOpen(!open)}
            className="transition-transform duration-300 hover:scale-110"
          >
            {open ? (
              <XMarkIcon className="w-6 h-6 text-gray-100 transition-all duration-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-100 transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-48' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-4 bg-gray-900/80 backdrop-blur-md p-4">
          <li>
            <a 
              href="#home" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-100 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
