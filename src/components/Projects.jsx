import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Inventory Management System",
    tech: ["Laravel", "PHP", "HTML", "CSS", "Tailwind", "PostgreSQL"],
    period: "May 2025 – Jul 2025",
    desc: "A full-featured inventory and stock management platform built with Laravel. Includes secure authentication, RBAC (admin/staff roles), relational database modeling, CRUD modules for products, vendors, categories, and users. Added intelligent stock alerts, activity logging, and optimized SQL queries for faster data handling. Designed clean dashboards and real-time analytics for total inventory visibility.",
    github: "https://github.com/KISHOR059/Inventory-management-system.git",
  },

  {
    title: "EV Charging Station Finder & Booking App",
    tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
    period: "Jan 2024 – May 2024",
    desc: "A smart web app that helps EV owners search and locate nearby charging stations using distance-based filtering. Integrated live availability display, booking slots, and reservation confirmation. Designed a smooth user flow for selecting charger type, time slots, and viewing station details. Reduced wait times by enabling pre-booking and avoiding congested stations.",
    github: "https://github.com/KISHOR059/EV-Charging-Station-Finder-and-Booking-Application.git",
  },

  {
    title: "Bus Ticketing & Reservation System",
    tech: ["Java", "HTML", "CSS", "JDBC", "MySQL"],
    period: "Academic Project",
    desc: "A Java-based desktop/web hybrid reservation system supporting ticket booking, seat selection, schedule management, and passenger registration. Implemented JDBC for database operations with secure queries, validation rules, and dynamic seat availability. Created admin functions for adding buses, routes, timings, and managing reservations seamlessly.",
    github: "https://github.com/KISHOR059/intelligent-bus-ticketing-reservation-system.git",
  }
];
  

const item = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-10 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white overflow-hidden"
    >
      {/* Neon compact blobs */}
      <div className="absolute top-0 left-1/3 w-48 h-48 bg-indigo-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-5 right-1/4 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl font-bold mb-10 
        bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-6 px-16 w-full max-w-full mx-auto relative z-10"

      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex flex-col md:flex-row md:items-center md:justify-between
gap-4 p-4 bg-white/5 backdrop-blur-xl border border-white/10
rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]
transition-all duration-300 w-full"

          >
            <div className="flex-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-1">
                {p.title}
              </h3>

              <p className="text-cyan-400 text-sm mb-1">{p.period}</p>

              <p className="text-gray-300 text-sm mb-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-gradient-to-r 
                    from-indigo-500 to-purple-500 text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub button */}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r 
              from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-sm font-semibold 
              hover:brightness-110 whitespace-nowrap"
            >
              <FaGithub className="text-base" />
              GitHub
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
