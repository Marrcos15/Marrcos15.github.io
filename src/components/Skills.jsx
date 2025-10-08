import { motion } from "framer-motion";
import {
  FaPython,
  FaJsSquare,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiMysql,
  SiMongodb,
  SiDjango,
} from "react-icons/si";
import GradientBackground from "./GradientBackground";

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
    { name: "Django", icon: <SiDjango className="text-cyan-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
    { name: "PHP", icon: <FaPhp className="text-gray-400" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 text-center overflow-hidden transition-colors duration-500"
    >
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl w-full backdrop-blur-xl bg-white/5 dark:bg-white/70 p-10 rounded-2xl border border-white/10 dark:border-gray-200 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 dark:text-cyan-600">
          Conocimientos y Tecnologías
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center text-center cursor-pointer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="text-5xl mb-2 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-sm text-gray-300 dark:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;