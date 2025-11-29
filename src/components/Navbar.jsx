// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  // Detect scroll shrink
  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      animate={{
        paddingTop: shrink ? "6px" : "16px",
        paddingBottom: shrink ? "6px" : "16px",
        width: shrink ? "92%" : "100%",
        borderRadius: shrink ? "20px" : "0px",
        backgroundColor: shrink
          ? "rgba(255,255,255,0.1)"
          : "rgba(255,255,255,0.15)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed left-1/2 -translate-x-1/2 top-0 z-50 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          className={`font-extrabold tracking-wide text-white ${shrink ? "text-xl" : "text-2xl"}`}
        >
          Kishor.dev
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <ScrollLink
              key={l.to}
              to={l.to}
              smooth
              duration={500}
              offset={-60}
              spy={true}
              activeClass="active-link"
              className="relative cursor-pointer text-white dark:text-gray-200 transition group"
            >
              {l.label}
              {/* Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}

          {/* Right-end Neon Logo </> */}
          <motion.div
            className="ml-6 font-extrabold text-white text-2xl tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, textShadow: "0 0 10px #fff, 0 0 20px #8b5cf6, 0 0 30px #6366f1" }}
            transition={{ duration: 0.3 }}
          >
            &lt;/&gt;
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          {/* Neon Logo </> */}
          <motion.div
            className="font-extrabold text-white text-xl tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, textShadow: "0 0 10px #fff, 0 0 15px #8b5cf6" }}
            transition={{ duration: 0.3 }}
          >
            &lt;/&gt;
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-white/30"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" className="stroke-current">
              <path
                d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/10 p-4 rounded-xl mt-3 mx-4 shadow-lg"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <ScrollLink
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={500}
                  offset={-60}
                  onClick={() => setOpen(false)}
                  spy={true}
                  activeClass="active-link"
                  className="relative py-1 text-white dark:text-gray-200"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind Active Link Styling */}
      <style jsx>{`
        .active-link span {
          width: 100%;
        }
      `}</style>
    </motion.nav>
  );
}
