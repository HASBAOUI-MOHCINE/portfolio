import React, { useState, useEffect } from "react";

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-gray-900/70 shadow-lg shadow-purple-500/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:brightness-110 transition-all duration-300"
        >
          MOHCINE DEV
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative tracking-wide text-gray-200 hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/60 overflow-hidden group transition-all"
        >
          <span className={`absolute h-[2px] w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500 ${open ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
          <span className={`absolute h-[2px] w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500 ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
          <span className={`absolute h-[2px] w-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500 ${open ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-600/10 to-pink-600/10 transition-opacity duration-500"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${open ? 'max-h-72' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-4 bg-gray-900/85 backdrop-blur-md px-6 pb-6 pt-4 border-t border-gray-700/50">
          {navItems.map((l, i) => (
            <li
              key={l.href}
              style={{ animationDelay: `${i * 60}ms` }}
              className="animate-[fadeSlide_.5s_ease]"
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-200 hover:text-white font-medium tracking-wide py-2 pl-1 relative group"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-b from-purple-600/10 to-pink-600/10 rounded-md transition-all duration-300 group-hover:w-full"></span>
                <span className="relative">
                  {l.label}
                  <span className="ml-2 inline-block w-0 group-hover:w-3 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 align-middle transition-all duration-300"></span>
                </span>
              </a>
            </li>
          ))}
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
