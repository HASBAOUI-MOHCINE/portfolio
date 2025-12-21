import React from "react";
import { Link } from "react-router-dom";
import { useTheme, useTranslation } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  const t = useTranslation();

  return (
    <section className="pt-20 sm:pt-24 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6">
      <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        {t.home.title} <span className="text-purple-500">{t.home.titleHighlight}</span>
      </h1>
      <p className={`text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 ${
        isDark ? 'text-gray-300' : 'text-gray-600'
      }`}>{t.home.subtitle}</p>
      <p className={`max-w-md sm:max-w-xl text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed px-2 ${
        isDark ? 'text-gray-400' : 'text-gray-500'
      }`}>
        {t.home.description}
      </p>
      <Link
        to="/projects"
        className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-purple-500 hover:bg-purple-400 text-gray-900 font-semibold rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-400/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
      >
        {t.home.cta}
      </Link>
    </section>
  );
};

export default Home;
