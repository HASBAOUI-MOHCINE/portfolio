import React, { useEffect, useState, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { isDark } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const updateMousePosition = useCallback((e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 30,
      y: (e.clientY / window.innerHeight - 0.5) * 30,
    });
  }, []);

  const updateScrollY = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
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
  }, [updateMousePosition, updateScrollY]);

  return (
    <>
      {/* Dynamic Animated Background */}
      <div className={`fixed inset-0 -z-20 transition-all duration-2000 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}>
        {/* Animated gradient waves */}
        <div className={`absolute inset-0 transition-all duration-3000 ${
          isDark
            ? 'bg-gradient-to-r from-cyan-900/10 via-transparent to-purple-900/10'
            : 'bg-gradient-to-r from-cyan-50/10 via-transparent to-blue-50/10'
        } animate-gradient-x`}></div>
        <div className={`absolute inset-0 transition-all duration-4000 ${
          isDark
            ? 'bg-gradient-to-l from-blue-900/8 via-transparent to-green-900/8'
            : 'bg-gradient-to-l from-blue-50/8 via-transparent to-green-50/8'
        } animate-gradient-y`}></div>
      </div>

      {/* Interactive Floating Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Large morphing orbs */}
        <div
          className={`absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[200px] transition-all duration-[10000ms] ease-in-out ${
            isDark ? 'bg-gradient-to-r from-cyan-500/12 to-blue-500/8' : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/15'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) translateY(${scrollY * 0.1}px)`,
            animation: 'morph 15s ease-in-out infinite, drift 25s ease-in-out infinite'
          }}
        ></div>

        <div
          className={`absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px] transition-all duration-[8000ms] ease-in-out ${
            isDark ? 'bg-gradient-to-l from-purple-500/10 to-pink-500/6' : 'bg-gradient-to-l from-purple-400/18 to-pink-400/12'
          }`}
          style={{
            transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px) translateY(${scrollY * -0.08}px)`,
            animation: 'morph 18s ease-in-out infinite reverse, drift 30s ease-in-out infinite reverse'
          }}
        ></div>

        {/* Medium interactive shapes */}
        <div
          className={`absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[100px] transition-all duration-[6000ms] ease-in-out ${
            isDark ? 'bg-gradient-to-br from-green-500/8 to-teal-500/6' : 'bg-gradient-to-br from-green-400/16 to-teal-400/12'
          }`}
          style={{
            transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px) translate(-50%, -50%) translateY(${scrollY * 0.05}px)`,
            animation: 'morph 12s ease-in-out infinite, orbit 20s linear infinite'
          }}
        ></div>

        {/* Floating geometric crystals */}
        <div
          className={`absolute top-1/3 right-1/3 w-40 h-40 transition-all duration-2000 ${
            isDark ? 'bg-cyan-400/15' : 'bg-cyan-500/25'
          } clip-path-hexagon`}
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px) rotate(${scrollY * 0.1}deg)`,
            animation: 'float 16s ease-in-out infinite, crystal-rotate 25s linear infinite'
          }}
        ></div>

        <div
          className={`absolute bottom-1/3 left-1/3 w-32 h-32 transition-all duration-2000 ${
            isDark ? 'bg-purple-400/12' : 'bg-purple-500/20'
          } clip-path-triangle`}
          style={{
            transform: `translate(${mousePosition.x * -0.7}px, ${mousePosition.y * -0.7}px) rotate(${scrollY * -0.08}deg)`,
            animation: 'float 20s ease-in-out infinite reverse, crystal-rotate 30s linear infinite reverse'
          }}
        ></div>

        {/* Animated particle system */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
                isDark ? 'bg-cyan-400/40' : 'bg-cyan-500/50'
              }`}
              style={{
                left: `${10 + (i * 8)}%`,
                top: `${15 + (i * 7)}%`,
                animation: `particle-float ${10 + i * 1.5}s ease-in-out infinite, particle-glow ${4 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Flowing energy streams */}
        <div
          className={`absolute top-0 left-1/4 w-1 h-full transition-all duration-3000 ${
            isDark ? 'bg-gradient-to-b from-cyan-400/20 to-transparent' : 'bg-gradient-to-b from-cyan-500/30 to-transparent'
          }`}
          style={{
            transform: `translateX(${mousePosition.x * 0.2}px)`,
            animation: 'flow 8s ease-in-out infinite'
          }}
        ></div>

        <div
          className={`absolute top-0 right-1/3 w-1 h-full transition-all duration-3000 ${
            isDark ? 'bg-gradient-to-b from-purple-400/15 to-transparent' : 'bg-gradient-to-b from-purple-500/25 to-transparent'
          }`}
          style={{
            transform: `translateX(${mousePosition.x * -0.15}px)`,
            animation: 'flow 10s ease-in-out infinite reverse'
          }}
        ></div>
      </div>

      {/* Animated mesh/grid overlay */}
      <div className={`fixed inset-0 -z-5 transition-all duration-2000 ${
        isDark ? 'opacity-6' : 'opacity-8'
      }`}>
        <div
          className={`absolute inset-0 transition-all duration-3000 ${
            isDark
              ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03)_1px,transparent_1px)]'
              : 'bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.05)_1px,transparent_1px)]'
          }`}
          style={{
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      {/* Subtle vignette effect */}
      <div className={`fixed inset-0 -z-5 pointer-events-none transition-opacity duration-2000 ${
        isDark ? 'opacity-20' : 'opacity-10'
      }`}>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black"></div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 50%; transform: scale(1); }
          25% { border-radius: 40% 60% 70% 30%; transform: scale(1.1); }
          50% { border-radius: 30% 70% 40% 60%; transform: scale(0.9); }
          75% { border-radius: 60% 40% 30% 70%; transform: scale(1.05); }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(120deg); }
          66% { transform: translate(-20px, 30px) rotate(240deg); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }

        @keyframes crystal-rotate {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) scale(1.2); }
          50% { transform: translateY(-10px) translateX(-5px) scale(0.8); }
          75% { transform: translateY(-25px) translateX(8px) scale(1.1); }
        }

        @keyframes particle-glow {
          0%, 100% { opacity: 0.4; box-shadow: 0 0 5px currentColor; }
          50% { opacity: 1; box-shadow: 0 0 20px currentColor; }
        }

        @keyframes flow {
          0%, 100% { opacity: 0; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        @keyframes animate-gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes animate-gradient-y {
          0%, 100% { background-position: 50% 0%; }
          50% { background-position: 50% 100%; }
        }

        @keyframes grid-shift {
          0%, 100% { background-position: 0px 0px; }
          50% { background-position: 25px 25px; }
        }

        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%);
        }

        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%);
        }
      `}</style>
    </>
  );
};

export default Background;
