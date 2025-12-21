import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.99,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.3,
};

const PageTransition = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified animation for mobile
  const mobileVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const mobileTransition = {
    duration: 0.2,
  };

  return (
    <motion.div
      initial={isMobile ? "initial" : "initial"}
      animate={isMobile ? "animate" : "animate"}
      exit={isMobile ? "exit" : "exit"}
      variants={isMobile ? mobileVariants : pageVariants}
      transition={isMobile ? mobileTransition : pageTransition}
      className={isMobile ? "" : "will-change-transform"}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
