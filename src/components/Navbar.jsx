import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, lang, toggleLang, toggleTheme } = useTheme();
  const t = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleThemeToggle = () => toggleTheme();

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'backdrop-blur-md bg-gray-950/90 border-b border-gray-800' 
          : 'backdrop-blur-md bg-white/90 border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto relative flex items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex-1 flex justify-center">

        {/* Desktop */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">
            <li>
              <Link
                to="/"
                className={`relative tracking-wide transition-colors duration-200 ${
                  location.pathname === '/' 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.nav.home}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-200 ${
                  location.pathname === '/' ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`relative tracking-wide transition-colors duration-200 ${
                  location.pathname === '/skills' 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.nav.skills}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-200 ${
                  location.pathname === '/skills' ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/certifications"
                className={`relative tracking-wide transition-colors duration-200 ${
                  location.pathname === '/certifications' 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.nav.certifications}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-200 ${
                  location.pathname === '/certifications' ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`relative tracking-wide transition-colors duration-200 ${
                  location.pathname === '/projects' 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.nav.projects}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-200 ${
                  location.pathname === '/projects' ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`relative tracking-wide transition-colors duration-200 ${
                  location.pathname === '/contact' 
                    ? isDark ? 'text-white' : 'text-gray-900'
                    : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {t.nav.contact}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-200 ${
                  location.pathname === '/contact' ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Toggles */}
        <div className="hidden lg:flex items-center gap-2 absolute right-4 sm:right-6">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Toggle Mobile */}
          <button
            onClick={toggleLang}
            className={`px-2 py-1.5 rounded-md text-xs font-medium transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          {/* Theme Toggle Mobile */}
          <button
            onClick={handleThemeToggle}
            className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
            className={`relative w-8 h-8 flex items-center justify-center rounded-md transition-colors duration-200 ${
              isDark 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-[3px]">
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-200 ${isDark ? 'bg-current' : 'bg-current'} ${open ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-200 ${isDark ? 'bg-current' : 'bg-current'} ${open ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-200 ${isDark ? 'bg-current' : 'bg-current'} ${open ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className={`flex flex-col gap-1 px-4 pb-4 pt-2 border-t ${
          isDark ? 'bg-gray-950/95 backdrop-blur-md border-gray-800' : 'bg-white/95 backdrop-blur-md border-gray-200'
        }`}>
          <li>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === '/' 
                  ? isDark ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              onClick={() => setOpen(false)}
              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === '/skills' 
                  ? isDark ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.nav.skills}
            </Link>
          </li>
          <li>
            <Link
              to="/certifications"
              onClick={() => setOpen(false)}
              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === '/certifications' 
                  ? isDark ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.nav.certifications}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === '/projects' 
                  ? isDark ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`block py-2 px-3 rounded-md text-sm transition-colors ${
                location.pathname === '/contact' 
                  ? isDark ? 'text-white bg-gray-800/50' : 'text-gray-900 bg-gray-100'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
