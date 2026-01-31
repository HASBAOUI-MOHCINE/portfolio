import React from "react";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { isDark } = useTheme();

  const backgroundStyle = isDark
    ? {
        backgroundImage: [
          "radial-gradient(circle at 18% 18%, rgba(244,63,94,0.10), transparent 55%)",
          "radial-gradient(circle at 82% 82%, rgba(245,158,11,0.08), transparent 60%)",
          "linear-gradient(180deg, rgb(3,7,18) 0%, rgb(9,9,11) 70%, rgb(3,7,18) 100%)",
        ].join(","),
      }
    : {
        backgroundImage: [
          "radial-gradient(circle at 16% 18%, rgba(244,63,94,0.08), transparent 58%)",
          "radial-gradient(circle at 85% 82%, rgba(245,158,11,0.06), transparent 62%)",
          "linear-gradient(180deg, rgb(255,255,255) 0%, rgb(248,250,252) 55%, rgb(255,255,255) 100%)",
        ].join(","),
      };

  return (
    <>
      {/* Clean, subtle gradient background */}
      <div
        className="fixed inset-0 -z-20"
        style={backgroundStyle}
      >
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>
      </div>
    </>
  );
};

export default Background;
