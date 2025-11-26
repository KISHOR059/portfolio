import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background tech lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-1/2 h-px bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 animate-pulse top-1/4 left-0"></div>
        <div className="absolute w-1/3 h-px bg-gradient-to-r from-green-400 to-cyan-400 opacity-20 animate-pulse top-1/2 right-0"></div>
        <div className="absolute w-2/3 h-px bg-gradient-to-r from-pink-500 to-yellow-500 opacity-20 animate-pulse bottom-1/4 left-0"></div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-extrabold mb-28 tracking-wide bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/kishor-m-567b95297"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-lg border border-indigo-500/40 rounded-2xl cursor-pointer shadow-lg hover:shadow-indigo-500/40 transition"
        >
          <Linkedin size={32} className="text-blue-400" />
          <div>
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-300 text-sm">Visit Profile</p>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/KISHOR059"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-lg border border-purple-500/40 rounded-2xl cursor-pointer shadow-lg hover:shadow-purple-500/40 transition"
        >
          <Github size={32} className="text-white" />
          <div>
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-300 text-sm">View Projects</p>
          </div>
        </motion.a>

        {/* Gmail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-lg border border-pink-500/40 rounded-2xl cursor-default shadow-lg hover:shadow-pink-500/40 transition"
        >
          <Mail size={32} className="text-red-400" />
          <div>
            <h3 className="text-lg font-semibold">Gmail</h3>
            <p className="text-gray-300 text-sm">kishoffl@gmail.com</p>
          </div>
        </motion.div>

        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 p-5 bg-gray-900/50 backdrop-blur-lg border border-cyan-500/40 rounded-2xl cursor-default shadow-lg hover:shadow-cyan-500/40 transition"
        >
          <Phone size={32} className="text-green-400" />
          <div>
            <h3 className="text-lg font-semibold">Mobile</h3>
            <p className="text-gray-300 text-sm">+91 8110099663</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
