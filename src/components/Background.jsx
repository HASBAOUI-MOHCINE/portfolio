import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateMousePosition = useCallback((e) => {
    if (isMobile) return; // Skip mouse tracking on mobile
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 15, // Reduced movement
      y: (e.clientY / window.innerHeight - 0.5) * 15,
    });
  }, [isMobile]);

  const updateScrollY = useCallback(() => {
    if (isMobile) return; // Skip scroll tracking on mobile
    setScrollY(window.scrollY * 0.05); // Reduced parallax
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // No event listeners on mobile

    let mouseAnimationFrame;
    let scrollAnimationFrame;

    const handleMouseMove = (e) => {
      if (mouseAnimationFrame) cancelAnimationFrame(mouseAnimationFrame);
      mouseAnimationFrame = requestAnimationFrame(() => updateMousePosition(e));
    };

    const handleScroll = () => {
      if (scrollAnimationFrame) cancelAnimationFrame(scrollAnimationFrame);
      scrollAnimationFrame = requestAnimationFrame(updateScrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (mouseAnimationFrame) cancelAnimationFrame(mouseAnimationFrame);
      if (scrollAnimationFrame) cancelAnimationFrame(scrollAnimationFrame);
    };
  }, [updateMousePosition, updateScrollY, isMobile]);

  return (
    <>
      {/* Simple background for mobile, animated for desktop */}
      <div className={`fixed inset-0 -z-20 transition-all duration-2000 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}>
        {!isMobile && (
          <>
            {/* Animated gradient waves - desktop only */}
            <div className={`absolute inset-0 transition-all duration-3000 ${
              isDark
                ? 'bg-gradient-to-r from-purple-900/10 via-transparent to-purple-900/10'
                : 'bg-gradient-to-r from-purple-50/10 via-transparent to-blue-50/10'
            } animate-gradient-x`}></div>
            <div className={`absolute inset-0 transition-all duration-4000 ${
              isDark
                ? 'bg-gradient-to-l from-blue-900/8 via-transparent to-green-900/8'
                : 'bg-gradient-to-l from-blue-50/8 via-transparent to-green-50/8'
            } animate-gradient-y`}></div>
          </>
        )}
      </div>

      {/* Simplified floating elements for desktop only */}
      {!isMobile && (
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Large morphing orbs - reduced size and complexity */}
          <div
            className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-[8000ms] ease-in-out ${
              isDark ? 'bg-gradient-to-r from-purple-500/8 to-blue-500/5' : 'bg-gradient-to-r from-purple-400/15 to-blue-400/10'
            }`}
            style={{
              transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px) translateY(${scrollY * 0.05}px)`,
              animation: 'morph 20s ease-in-out infinite'
            }}
          ></div>

          <div
            className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-[6000ms] ease-in-out ${
              isDark ? 'bg-gradient-to-l from-purple-500/6 to-pink-500/4' : 'bg-gradient-to-l from-purple-400/12 to-pink-400/8'
            }`}
            style={{
              transform: `translate(${mousePosition.x * -0.25}px, ${mousePosition.y * -0.25}px) translateY(${scrollY * -0.03}px)`,
              animation: 'morph 25s ease-in-out infinite reverse'
            }}
          ></div>

          {/* Simplified particle system */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
                  isDark ? 'bg-purple-400/30' : 'bg-purple-500/40'
                }`}
                style={{
                  left: `${15 + (i * 12)}%`,
                  top: `${20 + (i * 10)}%`,
                  animation: `particle-float ${12 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      )}

      {/* Simplified mesh/grid overlay */}
      <div className={`fixed inset-0 -z-5 transition-all duration-2000 ${
        isDark ? 'opacity-4' : 'opacity-6'
      }`}>
        <div
          className={`absolute inset-0 transition-all duration-3000 ${
            isDark
              ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,128,0.02)_1px,transparent_1px)]'
              : 'bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,128,0.03)_1px,transparent_1px)]'
          }`}
          style={{
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Subtle vignette effect */}
      <div className={`fixed inset-0 -z-5 pointer-events-none transition-opacity duration-2000 ${
        isDark ? 'opacity-15' : 'opacity-8'
      }`}>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black"></div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 50%; transform: scale(1); }
          50% { border-radius: 40% 60%; transform: scale(1.05); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-15px) translateX(5px) scale(1.1); }
        }

        @keyframes animate-gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes animate-gradient-y {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }

        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.05) 100%);
        }
      `}</style>
    </>
  );
};

export default Background;
