import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Inventory Management System",
    tech: ["Laravel", "PHP", "HTML", "CSS", "Tailwind", "PostgreSQL"],
    period: "May 2025 – Jul 2025",
    desc: "Developed a secure web application with authentication, RBAC, and relational database design. Implemented admin modules for managing products, categories, users, vendors, and inventory logs efficiently.",
    github: "https://github.com/yourusername/inventory-management",
  },
  {
    title: "EV Charging Station Finder & Booking App (Academic Project)",
    tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    period: "Jan 2024 – May 2024",
    desc: "Built an application that allows users to locate nearby EV charging stations with real-time availability and reserve charging slots in advance to reduce waiting time.",
    github: "https://github.com/KISHOR059/EV-Charging-Station-Finder-and-Booking-Application.git",
  },
  {
    title: "Intelligent Bus Ticketing & Reservation System",
    tech: ["Java", "HTML", "CSS", "JDBC", "MySQL"],
    period: "Academic Project",
    desc: "Created a bus reservation system that streamlines ticket booking, seat management, and schedule handling using Java & JDBC with a structured backend.",
    github: "https://github.com/yourusername/bus-ticketing-system",
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
      className="py-16 w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12 tracking-wide bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-12 px-4 w-full max-w-6xl mx-auto"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-700 pb-6"
          >
            {/* Project Content */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-1">
                {p.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-2">{p.period}</p>
              <p className="text-gray-300 mb-2 leading-relaxed">{p.desc}</p>
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
            <div className="mt-2 md:mt-0">
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
  