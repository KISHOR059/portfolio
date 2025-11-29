import { motion } from "framer-motion";
import { 
  FaJava, FaPhp, FaReact, FaGitAlt 
} from "react-icons/fa";
import { 
  SiLaravel, SiHtml5, SiCss3, SiJavascript, SiMysql, 
  SiHibernate, SiTailwindcss, SiJquery, SiPostgresql, SiMongodb
} from "react-icons/si";
import { BsDatabaseFillGear } from "react-icons/bs";

// Custom Alpine.js icon
const AlpineIcon = () => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-sky-500 glow"
  >
    <path d="M12 2L2 12L12 22L22 12L12 2ZM7.5 12L12 7.5L16.5 12L12 16.5L7.5 12Z"/>
  </svg>
);

// Skill list
const skills = [
  { name: "Java", icon: <FaJava className="text-orange-600 text-5xl glow" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-700 text-5xl glow" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 text-5xl glow" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl glow" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 text-5xl glow" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-5xl glow" /> },
  { name: "React", icon: <FaReact className="text-blue-500 text-5xl glow" /> },
  { name: "Hibernate", icon: <SiHibernate className="text-green-600 text-5xl glow" /> },
  { name: "SQL (MySQL)", icon: <SiMysql className="text-blue-700 text-5xl glow" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-5xl glow" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl glow" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl glow" /> },
  { name: "Alpine.js", icon: <AlpineIcon /> },
  { name: "Livewire", icon: <SiLaravel className="text-red-500 text-5xl glow" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl glow" /> },
  { name: "Database Design", icon: <BsDatabaseFillGear className="text-gray-300 text-5xl glow" /> },
];

// Variants for stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.75 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

export default function Skills() {
  const rowLength = 8;
  const rows = [];
  for (let i = 0; i < skills.length; i += rowLength) {
    rows.push(skills.slice(i, i + rowLength));
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden will-change-gpu">
      
      {/* Animated background neon shapes */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-pulse-slow mix-blend-screen hidden sm:block will-change-gpu"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 blur-[160px] rounded-full animate-pulse-slower mix-blend-screen hidden lg:block will-change-gpu"></div>
      <div className="absolute top-32 right-0 w-64 h-64 bg-pink-500/30 blur-2xl animate-pulse-slow mix-blend-screen hidden sm:block will-change-gpu"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-12 tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text will-change-gpu"
      >
        Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10 px-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-6">

            {/* Skill row with glass-like backdrop */}
            <motion.div 
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl will-change-gpu"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {row.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  {skill.icon}
                  <span className="text-gray-300 text-xs sm:text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated neon row divider */}
            {rowIndex < rows.length - 1 && (
              <motion.div
                className="w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-full animate-pulse-slow"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
