"use client";

import { motion } from "framer-motion";

export default function FadeUpAnimation({
  children,
  className,
  amount = 0.4,
  duration = 0.6,
  initialY = 30,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true, 
        amount, 
        margin: "-50px",
        fallback: false
      }}
      transition={{ 
        duration,
        ease: "easeOut",
        type: "tween"
      }}
      style={{
        willChange: "transform, opacity"
      }}
    >
      {children}
    </motion.div>
  );
}
