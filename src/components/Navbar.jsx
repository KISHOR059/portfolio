// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShrink(true);
      else setShrink(false);
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
          className={`font-extrabold tracking-wide bg-clip-text text-white
          ${shrink ? "text-xl" : "text-2xl"}`}
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
              className="relative cursor-pointer text-white dark:text-gray-200 transition group"
            >
              {l.label}

              {/* Hover underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 
                transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}

          {/* Resume Button */}
          <a
            href={`${process.env.PUBLIC_URL}/assets/Kishor_Resume.pdf`}
            download="Kishor_Resume.pdf"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md 
            hover:shadow-xl hover:scale-105 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md border border-white/30">
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
                  className="py-1"
                >
                  {l.label}
                </ScrollLink>
              ))}

              <a
                href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
                download="Kishor-Resume.pdf"

                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
