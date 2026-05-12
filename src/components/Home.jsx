import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";

const Home = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Much more premium, bouncy intro sequence vs standard "WordPress fade-in"
      gsap.fromTo(
        contentRef.current.children,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "expo.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden">
      
      {/* Dynamic Grid Background Overlay */}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-colors duration-1000 ${
        isDark 
          ? '[background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:32px_32px]' 
          : '[background-image:linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:32px_32px]'
      }`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,#00000000_0%,#000000_100%)]' : 'bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,#ffffff00_0%,#ffffff_100%)]'}`}></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-10 sm:mb-12 transition-all duration-500 hover:scale-105 cursor-default ${
          isDark 
            ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.15)] hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]' 
            : 'bg-white text-rose-600 border border-rose-200 shadow-xl'
        }`}>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
          {t.home.subtitle}
        </div>

        {/* Hero Title */}
        <h1 className={`text-center font-black tracking-tighter text-6xl sm:text-8xl md:text-[7rem] leading-[0.95] mb-8 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="block">{t.home.title}</span>
          <span className={`block pb-2 text-transparent bg-clip-text bg-gradient-to-tr ${isDark ? 'from-rose-400 via-amber-200 to-white' : 'from-rose-600 via-amber-500 to-black'}`}>
            {t.home.titleHighlight}
          </span>
        </h1>

        {/* Descriptor */}
        <p className={`text-center max-w-2xl text-lg sm:text-2xl mb-12 leading-relaxed mx-auto font-bold tracking-tight ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {t.home.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            to="/projects"
            className={`group relative w-full sm:w-auto inline-flex justify-center items-center gap-4 px-10 py-5 font-black uppercase tracking-widest rounded-none border-2 transition-all duration-300 text-sm overflow-hidden ${
              isDark 
                ? 'bg-white text-black border-white hover:bg-transparent hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.15)]' 
                : 'bg-black text-white border-black hover:bg-transparent hover:text-black shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
            }`}
          >
            <span className="relative z-10">{t.home.cta}</span>
            <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link
            to="/contact"
            className={`group w-full sm:w-auto inline-flex justify-center items-center px-10 py-5 font-black uppercase tracking-widest rounded-none border-2 transition-all duration-300 text-sm ${
              isDark 
                ? 'border-gray-700 text-gray-300 hover:bg-white hover:border-white hover:text-black' 
                : 'border-gray-300 text-gray-600 hover:bg-black hover:border-black hover:text-white'
            }`}
          >
            {t.contact.title}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;
