import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const dropdownRef = useRef(null);

  const toggleResumeOptions = () => setShowResumeOptions(!showResumeOptions);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowResumeOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16 md:py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      
      <div className="max-w-2xl z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-xl text-center"
        >
          Hi, I'm <span className="text-yellow-400">Kishor</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          <TypewriterText />
        </motion.div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center relative w-full md:w-auto">

          <ScrollLink
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="cursor-pointer px-6 py-3 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 shadow-lg w-full md:w-auto text-center"
          >
            See Projects
          </ScrollLink>

          {/* Resume Dropdown */}
          <div className="relative w-full md:w-auto" ref={dropdownRef}>
            <button
              onClick={toggleResumeOptions}
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold shadow-lg hover:bg-yellow-300 transition-all duration-300 w-full md:w-auto"
            >
              Resume
            </button>

            <AnimatePresence>
              {showResumeOptions && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  transition={{ duration: 0.3 }}
                  className="absolute md:right-0 left-0 mt-2 w-full md:w-56 flex flex-col gap-2 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-pink-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.1)] z-20 p-2"
                >
                  <motion.a
                    href={`${process.env.PUBLIC_URL}/assets/Kishor_Resume.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl text-white font-medium text-center hover:scale-105 hover:bg-white/10 transition-all duration-300 border border-indigo-400/40 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(99,102,241,0.7)" }}
                  >
                    View Resume
                  </motion.a>

                  <motion.a
                    href={`${process.env.PUBLIC_URL}/assets/Kishor_Resume.pdf`}
                    download
                    className="px-4 py-3 rounded-xl text-white font-medium text-center hover:scale-105 hover:bg-white/10 transition-all duration-300 border border-pink-400/40 shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236,72,153,0.7)" }}
                  >
                    Download Resume
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative BG Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2"
        animate={{ rotate: [0, 360], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        style={{ boxShadow: "0 0 20px rgba(139,92,246,0.7)" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-3/4 h-3/4 border-b-2 border-r-2"
        animate={{ rotate: [360, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        style={{ boxShadow: "0 0 20px rgba(6,182,212,0.7)" }}
      />
    </section>
  );
}
  