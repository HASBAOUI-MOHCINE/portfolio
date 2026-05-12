import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, lang, toggleLang, toggleTheme } = useTheme();
  const t = useTranslation();

  const isRTL = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-200 border-b ${
      isDark 
        ? `bg-black ${scrolled ? 'border-gray-800' : 'border-transparent'}` 
        : `bg-white ${scrolled ? 'border-gray-200' : 'border-transparent'}`
    }`}
    dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto py-3 flex items-center justify-between">
        
        {/* Placeholder to balance the flex layout */}
        <div className="hidden lg:block w-28"></div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex flex-1 justify-center gap-1 items-center">
          {['/', '/skills', '/certifications', '/projects', '/contact'].map((path) => {
            const labelKey = path === '/' ? 'home' : path.slice(1);
            const active = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`inline-block px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase transition-all duration-200 ${
                    active 
                      ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                      : isDark ? 'text-gray-400 hover:text-white hover:bg-gray-900' : 'text-gray-500 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {t.nav[labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2 w-auto lg:w-28 justify-end">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className={`flex items-center justify-center h-8 px-2.5 text-[10px] font-bold tracking-wider uppercase transition-all border ${
              isDark 
                ? 'bg-black text-white border-gray-800 hover:border-white hover:bg-gray-900' 
                : 'bg-white text-black border-gray-200 hover:border-black hover:bg-gray-50'
            }`}
          >
            {lang}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-8 h-8 flex items-center justify-center transition-all border ${
              isDark 
                ? 'bg-black text-white border-gray-800 hover:border-white hover:bg-gray-900' 
                : 'bg-white text-black border-gray-200 hover:border-black hover:bg-gray-50'
            }`}
          >
            {isDark ? <FiSun className="w-3.5 h-3.5" /> : <FiMoon className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
            className={`lg:hidden w-8 h-8 flex items-center justify-center border transition-all ${
              isDark 
                ? 'bg-black text-white border-gray-800 hover:border-white' 
                : 'bg-white text-black border-gray-200 hover:border-black'
            }`}
          >
            {open ? <FiX className="w-4 h-4"/> : <FiMenu className="w-4 h-4"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t ${
        open ? 'max-h-[400px] border-opacity-100' : 'max-h-0 border-opacity-0 border-transparent'
      } ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}>
        <ul className="flex flex-col p-3 gap-1">
          {['/', '/skills', '/certifications', '/projects', '/contact'].map((path) => {
            const labelKey = path === '/' ? 'home' : path.slice(1);
            const active = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 text-xs font-bold tracking-widest uppercase transition-all ${
                    active 
                      ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                      : isDark 
                        ? 'text-gray-400 hover:text-white hover:bg-gray-900' 
                        : 'text-gray-500 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {t.nav[labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
