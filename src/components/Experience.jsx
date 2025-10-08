import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import GradientBackground from "./GradientBackground";

function Experience() {
  const experienceData = [
    {
      year: "ENE 2024 – AGO 2025",
      title: "Full Stack Developer Web — La Casa de Las Carcasas",
      description:
        "Automatización de procesos clave con Python, incluyendo actualización dinámica de precios e inventarios. Procesamiento de datos XLSX → MySQL, optimización de tiempos de carga y validación. Desarrollo de soluciones web en Prestashop alineadas con los objetivos del negocio.",
      icon: <FaBriefcase className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
    {
      year: "DIC 2020 – FEB 2023",
      title: "Técnico de Soporte y Analista de Datos — Evicertia",
      description:
        "Implementación y mantenimiento de una base de datos PostgreSQL replicada con sincronización automática. Automatización de procesos de facturación y ventas mediante SQL y Bash. Soporte técnico de software y optimización de sistemas para mejorar la satisfacción del usuario final.",
      icon: <FaBriefcase className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
  ];

  const educationData = [
    {
      year: "2023 – 2024",
      title: "Carrera Full Stack Developer",
      description: "Bootcamp en Pixel Pro, centrado en desarrollo web moderno y frameworks de backend/frontend.",
      icon: <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
    {
      year: "2018 – 2020",
      title: "Grado Superior ASIR",
      description: "Administración de Sistemas Informáticos en Red, IES Juan de la Cierva (Madrid).",
      icon: <FaGraduationCap className="text-cyan-400 dark:text-cyan-600 text-xl" />,
    },
    {
      year: "2015 – 2018",
      title: "Grado en Biología",
      description: "Universidad de Salamanca.",
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

        {/* Experiencia laboral */}
        <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-6">Experiencia Laboral</h3>
        <div className="relative border-l-2 border-cyan-500/40 dark:border-cyan-600/40 pl-6 space-y-10 mb-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 dark:bg-white/70 backdrop-blur-xl border border-white/10 dark:border-gray-200 rounded-2xl p-6 shadow-lg text-left"
            >
              <div className="absolute -left-10 top-6 w-8 h-8 flex items-center justify-center bg-[#0D1117] dark:bg-gray-100 border-2 border-cyan-500 dark:border-cyan-600 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white dark:text-gray-900">{item.title}</h3>
              <p className="text-sm text-cyan-400 dark:text-cyan-600 mb-2">{item.year}</p>
              <p className="text-gray-300 dark:text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Educación */}
        <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-6">Educación</h3>
        <div className="relative border-l-2 border-cyan-500/40 dark:border-cyan-600/40 pl-6 space-y-10">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-white/5 dark:bg-white/70 backdrop-blur-xl border border-white/10 dark:border-gray-200 rounded-2xl p-6 shadow-lg text-left"
            >
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
