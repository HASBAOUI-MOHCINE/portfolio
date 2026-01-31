import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme, useTranslation } from "../context/ThemeContext";
import gsap from "gsap";

const Home = () => {
  const { isDark } = useTheme();
  const t = useTranslation();
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const highlightRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const secondaryCtaRef = useRef(null);
  const bgShape1 = useRef(null);
  const bgShape2 = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.to(bgShape1.current, {
          x: 40,
          y: -20,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(bgShape2.current, {
          x: -35,
          y: 25,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });

      if (!prefersReducedMotion) {
        tl.fromTo(
          subtitleRef.current,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 }
        )
          .fromTo(
            titleRef.current,
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55 },
            "-=0.15"
          )
          .fromTo(
            highlightRef.current,
            { y: 18, opacity: 0, filter: "blur(6px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.6 },
            "-=0.35"
          )
          .fromTo(
            descRef.current,
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45 },
            "-=0.25"
          )
          .fromTo(
            [ctaRef.current, secondaryCtaRef.current],
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 },
            "-=0.2"
          );
      } else {
        gsap.set(
          [subtitleRef.current, titleRef.current, highlightRef.current, descRef.current, ctaRef.current, secondaryCtaRef.current],
          { opacity: 1, clearProps: "transform" }
        );
      }

      const btn = ctaRef.current;
      const onEnter = () => {
        gsap.to(btn, { scale: 1.02, duration: 0.18, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(btn, { scale: 1, duration: 0.18, ease: "power2.out" });
      };
      btn?.addEventListener("mouseenter", onEnter);
      btn?.addEventListener("mouseleave", onLeave);

      return () => {
        btn?.removeEventListener("mouseenter", onEnter);
        btn?.removeEventListener("mouseleave", onLeave);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 sm:pt-24 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        ref={bgShape1}
        className={`absolute top-1/4 -left-32 w-72 h-72 sm:w-[400px] sm:h-[400px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-rose-900/20' : 'bg-rose-200/40'
        }`}
      />
      <div
        ref={bgShape2}
        className={`absolute bottom-1/4 -right-32 w-72 h-72 sm:w-[350px] sm:h-[350px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? 'bg-amber-900/15' : 'bg-amber-200/30'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div ref={subtitleRef} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8 ${
          isDark 
            ? 'bg-white/5 text-gray-400 border border-white/10' 
            : 'bg-gray-100 text-gray-600 border border-gray-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-rose-400' : 'bg-rose-600'}`}></span>
          {t.home.subtitle}
        </div>

        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <span ref={titleRef} className="inline-block">{t.home.title}</span>{" "}
          <span ref={highlightRef} className={`inline-block ${
            isDark ? 'text-rose-400' : 'text-rose-600'
          }`}>
            {t.home.titleHighlight}
          </span>
        </h1>

        <p ref={descRef} className={`max-w-xl text-base sm:text-lg mb-10 leading-relaxed mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {t.home.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            ref={ctaRef}
            to="/projects"
            className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors text-sm sm:text-base ${
              isDark 
                ? 'bg-rose-600 hover:bg-rose-500 text-white' 
                : 'bg-rose-600 hover:bg-rose-700 text-white'
            }`}
          >
            {t.home.cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            ref={secondaryCtaRef}
            to="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors text-sm sm:text-base ${
              isDark 
                ? 'text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600' 
                : 'text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400'
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
