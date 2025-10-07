import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import GradientBackground from "./GradientBackground";

function Experience() {
  const experienceData = [
    {
      year: "2024 - Actualidad",
      title: "Desarrollador Full Stack Freelance",
      description:
        "Creación de aplicaciones web personalizadas con Flask, React y Tailwind. Enfoque en UX y rendimiento.",
      icon: <FaBriefcase className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
    {
      year: "2023",
      title: "Desarrollador Web Junior — Proyecto Fitness App",
      description:
        "Diseño e implementación de una app de seguimiento fitness con Flask + React.",
      icon: <FaBriefcase className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
    {
      year: "2021 - 2023",
      title: "Formación en Desarrollo Full Stack",
      description:
        "Estudios centrados en Python, JavaScript, React y bases de datos SQL/NoSQL.",
      icon: <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden transition-colors duration-500"
    >
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-cyan-400 dark:text-cyan-600">
          Experiencia y Educación
        </h2>

        <div className="relative border-l-2 border-cyan-500/40 dark:border-cyan-600/40 pl-6 space-y-10">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 dark:bg-white/70 backdrop-blur-xl border border-white/10 dark:border-gray-200 rounded-2xl p-6 shadow-lg text-left transition-colors duration-500"
            >
              {/* Icono */}
              <div className="absolute -left-10 top-6 w-8 h-8 flex items-center justify-center bg-[#0D1117] dark:bg-gray-100 border-2 border-cyan-500 dark:border-cyan-600 rounded-full">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white dark:text-gray-900">{item.title}</h3>
              <p className="text-sm text-cyan-400 dark:text-cyan-600 mb-2">{item.year}</p>
              <p className="text-gray-300 dark:text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
