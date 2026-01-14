import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme, lang, toggleLang } = useTheme();
  const t = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? isDark 
          ? 'backdrop-blur-md bg-gray-900/80 shadow-lg shadow-black/10' 
          : 'backdrop-blur-md bg-white/80 shadow-lg shadow-gray-200/50'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto relative flex items-center px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex-1 flex justify-center">

        {/* Desktop */}
          <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm font-medium">
            <li>
              <Link
                to="/"
                className={`relative tracking-wide transition-colors duration-300 group ${
                  location.pathname === '/' 
                    ? 'text-purple-500' 
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.home}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className={`relative tracking-wide transition-colors duration-300 group ${
                  location.pathname === '/skills' 
                    ? 'text-purple-500' 
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.skills}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  location.pathname === '/skills' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/certifications"
                className={`relative tracking-wide transition-colors duration-300 group ${
                  location.pathname === '/certifications' 
                    ? 'text-purple-500' 
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.certifications}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  location.pathname === '/certifications' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`relative tracking-wide transition-colors duration-300 group ${
                  location.pathname === '/projects' 
                    ? 'text-purple-500' 
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.projects}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  location.pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`relative tracking-wide transition-colors duration-300 group ${
                  location.pathname === '/contact' 
                    ? 'text-purple-500' 
                    : isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.contact}
                <span className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 rounded-full transition-all duration-300 ${
                  location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
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
            className={`px-2.5 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 text-gray-300 hover:text-purple-400 hover:bg-gray-800' 
                : 'bg-gray-100 text-gray-600 hover:text-purple-600 hover:bg-gray-200'
            }`}
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 text-gray-300 hover:text-yellow-400 hover:bg-gray-800' 
                : 'bg-gray-100 text-gray-600 hover:text-purple-600 hover:bg-gray-200'
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
            className={`px-2 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 text-gray-300 hover:text-purple-400' 
                : 'bg-gray-100 text-gray-600 hover:text-purple-600'
            }`}
          >
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 text-gray-300 hover:text-yellow-400' 
                : 'bg-gray-100 text-gray-600 hover:text-purple-600'
            }`}
          >
            {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* Menu Button */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
            className={`relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/60 hover:border-gray-600' 
                : 'bg-gray-100 border border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col items-center justify-center gap-[3px]">
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-purple-400' : 'bg-purple-600'} ${open ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-purple-400' : 'bg-purple-600'} ${open ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${isDark ? 'bg-purple-400' : 'bg-purple-600'} ${open ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className={`flex flex-col gap-1 sm:gap-2 backdrop-blur-md px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t ${
          isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
        }`}>
          <li className={open ? 'animate-[fadeSlide_.5s_ease]' : ''}>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`block font-medium tracking-wide py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                location.pathname === '/' 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.nav.home}
            </Link>
          </li>
          <li className={open ? 'animate-[fadeSlide_.5s_ease]' : ''} style={{ animationDelay: '60ms' }}>
            <Link
              to="/skills"
              onClick={() => setOpen(false)}
              className={`block font-medium tracking-wide py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                location.pathname === '/skills' 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.nav.skills}
            </Link>
          </li>
          <li className={open ? 'animate-[fadeSlide_.5s_ease]' : ''} style={{ animationDelay: '120ms' }}>
            <Link
              to="/certifications"
              onClick={() => setOpen(false)}
              className={`block font-medium tracking-wide py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                location.pathname === '/certifications' 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.nav.certifications}
            </Link>
          </li>
          <li className={open ? 'animate-[fadeSlide_.5s_ease]' : ''} style={{ animationDelay: '180ms' }}>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className={`block font-medium tracking-wide py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                location.pathname === '/projects' 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li className={open ? 'animate-[fadeSlide_.5s_ease]' : ''} style={{ animationDelay: '240ms' }}>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`block font-medium tracking-wide py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                location.pathname === '/contact' 
                  ? 'bg-purple-500/10 text-purple-500' 
                  : isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </div>

      <style>
        {`@keyframes fadeSlide {
          0% { opacity:0; transform:translateY(-6px); }
          100% { opacity:1; transform:translateY(0); }
        }`}
      </style>
    </nav>
  );
};

export default Navbar;
