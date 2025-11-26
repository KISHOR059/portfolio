import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full animate-pulse-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-extrabold mb-8 tracking-wide 
          bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed mb-12"
        >
          I’m a passionate <span className="font-semibold text-indigo-500">Backend Developer (Java, Hibernate, Laravel)</span> and Full-Stack Engineer 
          who loves crafting scalable APIs, clean architectures, and modern user interfaces. 
          I build real-world applications with performance, design, and user experience in mind.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Backend Expertise",
              color: "indigo",
              desc: "Deep experience in Java, Hibernate, Laravel, REST APIs, database optimization, authentication systems and scalable architecture design."
            },
            {
              title: "Full-Stack Skills",
              color: "purple",
              desc: "Skilled in React, JavaScript, Tailwind, Livewire, Alpine.js to build beautiful frontends with seamless user experience and performance."
            },
            {
              title: "Problem Solver",
              color: "pink",
              desc: "Focus on clean architecture, debugging, optimization, and building end-to-end solutions for practical problems."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 + i * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl
                hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group`}
            >
              <h3 className={`text-2xl font-bold mb-3 text-${card.color}-400 group-hover:text-${card.color}-300`}>
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
