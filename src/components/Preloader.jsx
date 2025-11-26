// Preloader.jsx
import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const neonLine = "absolute w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.7)]";

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      
      <div className="relative w-32 h-32">
        {/* Neon Lines */}
        <motion.div
          className={neonLine}
          animate={{ rotate: 360, scaleX: [0.3, 1, 0.3], opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
        <motion.div
          className={neonLine + " top-3 left-3 w-24"}
          animate={{ rotate: -360, scaleX: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
        <motion.div
          className={neonLine + " top-6 left-6 w-16"}
          animate={{ rotate: 360, scaleX: [0.4, 1, 0.4], opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />
      </div>

      {/* Loading Text */}
      <motion.span
        className="mt-8 text-white text-sm font-mono tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        Loading...
      </motion.span>
    </div>
  );
}
