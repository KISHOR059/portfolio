import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} className="text-blue-400" />,
      href: "https://www.linkedin.com/in/kishor-m-567b95297",
      gradient: "border-indigo-500/40 hover:shadow-indigo-500/50",
      delay: 0,
    },
    {
      name: "GitHub",
      icon: <Github size={32} className="text-white" />,
      href: "https://github.com/KISHOR059",
      gradient: "border-purple-500/40 hover:shadow-purple-500/50",
      delay: 0.1,
    },
    {
      name: "Gmail",
      icon: <Mail size={32} className="text-red-400" />,
      href: "mailto:kishoffl@gmail.com",
      gradient: "border-pink-500/40 hover:shadow-pink-500/50",
      delay: 0.2,
    },
    {
      name: "Mobile",
      icon: <Phone size={32} className="text-green-400" />,
      desc: "+918110099663",
      gradient: "border-cyan-500/40 hover:shadow-cyan-500/50",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      
      {/* Futuristic neon background lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-1/2 h-px bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 animate-pulse top-1/4 left-0"></div>
        <div className="absolute w-1/3 h-px bg-gradient-to-r from-green-400 to-cyan-400 opacity-20 animate-pulse top-1/2 right-0"></div>
        <div className="absolute w-2/3 h-px bg-gradient-to-r from-pink-500 to-yellow-500 opacity-20 animate-pulse bottom-1/4 left-0"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-extrabold mb-28 tracking-wide bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

        {contacts.map((c, i) =>
          c.name === "Mobile" ? (
            <motion.a
              key={i}
              href={`tel:${c.desc}`}
              className={`flex flex-col items-center justify-center gap-4 p-5 bg-gray-900/50 backdrop-blur-xl border rounded-2xl cursor-pointer shadow-lg ${c.gradient} text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
              transition={{ duration: 0.5, delay: c.delay }}
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-30 transition-all duration-500"></span>
              {c.icon}
              <h3 className="text-lg font-semibold z-10">{c.name}</h3>
              <p className="text-gray-300 text-sm z-10">{c.desc}</p>
            </motion.a>
          ) : (
            <motion.a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-4 p-5 bg-gray-900/50 backdrop-blur-xl border rounded-2xl cursor-pointer shadow-lg ${c.gradient} text-center relative overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
              transition={{ duration: 0.5, delay: c.delay }}
            >
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-30 transition-all duration-500"></span>
              {c.icon}
              <h3 className="text-lg font-semibold z-10">{c.name}</h3>
              <p className="text-gray-300 text-sm z-10">{c.name === "Gmail" ? "kishoffl@gmail.com" : "Visit Profile"}</p>
            </motion.a>
          )
        )}

      </div>
    </section>
  );
}
