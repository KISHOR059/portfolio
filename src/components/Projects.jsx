import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Inventory Management System",
    tech: ["Laravel", "PHP", "HTML", "CSS", "Tailwind", "PostgreSQL"],
    period: "May 2025 – Jul 2025",
    desc: "Developed a secure web application with authentication, RBAC, and relational database design. Implemented admin modules for managing products, categories, users, vendors, and inventory logs efficiently.",
    github: "https://github.com/KISHOR059/Inventory-management-system.git",
  },
  {
    title: "EV Charging Station Finder & Booking App (Academic Project)",
    tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    period: "Jan 2024 – May 2024",
    desc: "Built an app to locate EV charging stations with real-time availability and reserve charging slots, reducing waiting times.",
    github: "https://github.com/KISHOR059/EV-Charging-Station-Finder-and-Booking-Application.git",
  },
  {
    title: "Intelligent Bus Ticketing & Reservation System",
    tech: ["Java", "HTML", "CSS", "JDBC", "MySQL"],
    period: "Academic Project",
    desc: "Created a bus reservation system for ticket booking, seat management, and schedule handling using Java & JDBC.",
    github: "https://github.com/KISHOR059/intelligent-bus-ticketing-reservation-system.git",
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
<<<<<<< HEAD
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden will-change-gpu hardware-accelerated"
    >
      {/* Futuristic neon shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse-slow mix-blend-screen hidden sm:block will-change-gpu hardware-accelerated"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full animate-pulse-slower mix-blend-screen hidden lg:block will-change-gpu hardware-accelerated"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-pink-500/30 blur-2xl animate-pulse-slow mix-blend-screen hidden sm:block will-change-gpu hardware-accelerated"></div>
=======
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Futuristic neon shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse-slow mix-blend-screen"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full animate-pulse-slower mix-blend-screen"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-pink-500/30 blur-2xl animate-pulse-slow mix-blend-screen"></div>
>>>>>>> parent of f9726a7 (Smooth Scroll)

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-wide bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text will-change-gpu hardware-accelerated"
=======
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-wide bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
>>>>>>> parent of f9726a7 (Smooth Scroll)
      >
        Projects
      </motion.h2>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        initial="hidden"
        whileInView="visible"
<<<<<<< HEAD
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col gap-12 px-4 w-full max-w-6xl mx-auto relative z-10 will-change-gpu hardware-accelerated"
=======
        viewport={{ once: true }}
        className="flex flex-col gap-12 px-4 w-full max-w-6xl mx-auto relative z-10"
>>>>>>> parent of f9726a7 (Smooth Scroll)
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
<<<<<<< HEAD
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 will-change-gpu hardware-accelerated"
=======
            variants={item}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300"
>>>>>>> parent of f9726a7 (Smooth Scroll)
          >
            {/* Project Content */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-2">
                {p.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-3">{p.period}</p>
              <p className="text-gray-300 mb-3 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Button */}
            <div className="mt-4 md:mt-0">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:brightness-110 transition-all duration-300"
              >
                <FaGithub className="text-lg" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
