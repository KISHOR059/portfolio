import { motion } from "framer-motion";

export default function About() {
  const colorMap = {
    indigo: {
      text: "text-indigo-400",
      hoverText: "text-indigo-300",
      gradient: "from-indigo-400 to-indigo-300",
    },
    purple: {
      text: "text-purple-400",
      hoverText: "text-purple-300",
      gradient: "from-purple-400 to-purple-300",
    },
    pink: {
      text: "text-pink-400",
      hoverText: "text-pink-300",
      gradient: "from-pink-400 to-pink-300",
    },
  };

  const cards = [
    {
      title: "Backend Expertise",
      color: "indigo",
      desc: "Deep knowledge in Java, Hibernate, Laravel, REST APIs, scalable systems & secure architectures.",
    },
    {
      title: "Full-Stack Skills",
      color: "purple",
      desc: "End-to-end applications with React, JS, Tailwind, Livewire, Alpine, Java, Laravel, Node.js.",
    },
    {
      title: "Problem Solver",
      color: "pink",
      desc: "Architecture design, debugging, optimization, & engineering solutions for real-world challenges.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 bg-black overflow-hidden text-white"
    >
      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* Parallax Neon Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-[28rem] h-[28rem] rounded-full bg-purple-600/20 blur-[140px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl sm:text-6xl font-extrabold mb-10 tracking-wide bg-gradient-to-r 
          from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed mb-12"
        >
          I'm a passionate{" "}
          <span className="text-indigo-400 font-semibold">
            Full-Stack Developer
          </span>{" "}
          specializing in{" "}
          <span className="text-purple-400 font-semibold">React</span>,{" "}
          <span className="text-indigo-300 font-semibold">Java</span>,{" "}
          <span className="text-pink-400 font-semibold">Laravel</span>, and
          engineering smooth, high-performance{" "}
          <span className="text-purple-300 font-semibold">user experiences</span>
          with futuristic design principles.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl 
              hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] group"
            >
              <span className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

              <h3
                className={`text-2xl font-bold mb-3 transition-all duration-300 ${colorMap[card.color].text} group-hover:${colorMap[card.color].hoverText}`}
              >
                {card.title}
              </h3>

              <p className="text-gray-300 leading-relaxed relative z-10">
                {card.desc}
              </p>

              <div
                className={`mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r ${colorMap[card.color].gradient} animate-pulse`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
