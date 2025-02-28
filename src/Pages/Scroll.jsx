/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Scroll = ({ children, delay = 0, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Increased threshold for smoother trigger
  });

  // Animation variants
  const getInitialState = () => {
    switch(direction) {
      case "left": return { opacity: 0, x: -50 };
      case "right": return { opacity: 0, x: 50 };
      case "down": return { opacity: 0, y: -50 };
      default: return { opacity: 0, y: 50 }; // Default is "up"
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: { 
          type: "spring",
          stiffness: 60,
          damping: 15,
          delay 
        }
      } : {}}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default Scroll;