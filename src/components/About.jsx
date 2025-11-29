import { motion } from "framer-motion";

export default function About() {
  // Map colors for Tailwind
  const colorMap = {
    indigo: { text: "text-indigo-400", hoverText: "text-indigo-300", gradient: "from-indigo-400 to-indigo-300" },
    purple: { text: "text-purple-400", hoverText: "text-purple-300", gradient: "from-purple-400 to-purple-300" },
    pink: { text: "text-pink-400", hoverText: "text-pink-300", gradient: "from-pink-400 to-pink-300" },
  };

  const cards = [
    {
      title: "Backend Expertise",
      color: "indigo",
      desc: "Deep experience in Java, Hibernate, Laravel, REST APIs, authentication systems, and building scalable, high-performance architectures."
    },
    {
      title: "Full-Stack Skills",
      color: "purple",
      desc: "Builds end-to-end apps with React, JavaScript, Tailwind, Livewire, Alpine.js, Java, Laravel, and Node.js, delivering scalable APIs and interactive UIs."
    },
    {
      title: "Problem Solver",
      color: "pink",
      desc: "Focus on clean architecture, debugging, optimization, and end-to-end solutions for complex real-world challenges."
    }
  ];

  return (
    <section
      id="about"
<<<<<<< HEAD
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden will-change-gpu hardware-accelerated"
=======
      className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden"
>>>>>>> parent of f9726a7 (Smooth Scroll)
    >
      {/* Futuristic blurred neon shapes */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-pulse-slow mix-blend-screen"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full animate-pulse-slower mix-blend-screen"></div>
      <div className="absolute top-20 right-0 w-60 h-60 bg-pink-500/20 blur-2xl rounded-full animate-pulse-slow mix-blend-screen"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-12 tracking-wider 
            bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent will-change-gpu hardware-accelerated"
=======
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-12 tracking-wider 
            bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
>>>>>>> parent of f9726a7 (Smooth Scroll)
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
<<<<<<< HEAD
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full text-center text-gray-300 leading-relaxed mb-16 text-lg sm:text-xl px-4 sm:px-6 will-change-gpu hardware-accelerated"
=======
          transition={{ delay: 0.2, duration: 1 }}
          className="w-full text-center text-gray-300 leading-relaxed mb-16 text-lg sm:text-xl px-4 sm:px-6"
>>>>>>> parent of f9726a7 (Smooth Scroll)
        >
          I’m a passionate <span className="font-semibold text-indigo-400">Full-Stack Developer (React, Java, Laravel)</span>
          and engineer who loves crafting <span className="text-purple-400 font-semibold">scalable APIs</span>,
          <span className="text-pink-400 font-semibold"> Clean Architectures</span>, and <span className="text-indigo-400 font-semibold">modern, interactive UIs</span>.
          I build real-world applications with performance, design, and futuristic user experience in mind.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={i}
<<<<<<< HEAD
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.15 }}
              className="p-6 sm:p-8 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl
                hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-300 group will-change-gpu hardware-accelerated"
=======
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 + i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl
                hover:scale-[1.05] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-400 group"
>>>>>>> parent of f9726a7 (Smooth Scroll)
            >
              <h3 className={`text-2xl font-bold mb-3 ${colorMap[card.color].text} group-hover:${colorMap[card.color].hoverText}`}>
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{card.desc}</p>

              {/* Futuristic accent line */}
              <div className={`mt-4 h-[2px] w-16 rounded-full animate-pulse-slow bg-gradient-to-r ${colorMap[card.color].gradient}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
