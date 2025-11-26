import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 
      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white relative overflow-hidden"
    >
      {/* CENTERED TEXT */}
      <div className="max-w-2xl z-10 flex flex-col items-center text-center">

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
        >
          Hi, I'm <span className="text-yellow-300">Kishor</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-white/90"
        >
          <TypewriterText />
        </motion.div>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">
          <ScrollLink
            to="projects"
            smooth
            duration={600}
            offset={-70}
            className="
              cursor-pointer px-6 py-3 rounded-xl bg-white/10 backdrop-blur-lg
              hover:bg-white/20 transition-all duration-300 shadow-lg
            "
          >
            See Projects
          </ScrollLink>

          <a
            href="https://github.com/KISHOR059"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg
              hover:bg-yellow-300 transition-all duration-300
            "
          >
            My GitHub
          </a>
        </div>
      </div>

      {/* Decorative BG Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 hidden md:block"
        animate={{ rotate: [0, 360], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        style={{ boxShadow: "0 0 20px rgba(139,92,246,0.7)" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-3/4 h-3/4 border-b-2 border-r-2 hidden md:block"
        animate={{ rotate: [360, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        style={{ boxShadow: "0 0 20px rgba(6,182,212,0.7)" }}
      />

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 blur-3xl rounded-full"></div>
    </section>
  );
}
