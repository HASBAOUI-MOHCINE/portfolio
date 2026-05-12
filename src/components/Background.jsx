import React from "react";
import { useTheme } from "../context/ThemeContext";

const Background = () => {
  const { isDark } = useTheme();

  const backgroundStyle = isDark
    ? {
        backgroundColor: "#000000",
        backgroundImage: [
          "radial-gradient(circle at 18% 18%, rgba(244,63,94,0.12), transparent 45%)",
          "radial-gradient(circle at 82% 82%, rgba(245,158,11,0.08), transparent 50%)"
        ].join(","),
      }
    : {
        backgroundColor: "#ffffff",
        backgroundImage: [
          "radial-gradient(circle at 16% 18%, rgba(244,63,94,0.06), transparent 45%)",
          "radial-gradient(circle at 85% 82%, rgba(245,158,11,0.04), transparent 50%)"
        ].join(","),
      };

  return (
    <>
      <div
        className="fixed inset-0 -z-20 transition-colors duration-500"
        style={backgroundStyle}
      >
      </div>
    </>
  );
};

export default Background;
