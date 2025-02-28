/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Scroll = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation runs only once
    threshold: 0.2, // Element becomes visible when 20% is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }} // Ensures it's invisible until triggered
      transition={{ duration: 0.5, delay }}
      className="w-full"
      style={{ visibility: inView ? "visible" : "hidden" }} // Hides the section until animation starts
    >
      {children}
    </motion.div>
  );
};

export default Scroll;
