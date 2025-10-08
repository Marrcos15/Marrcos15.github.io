import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import GradientBackground from "./GradientBackground";

function Projects() {
  const projects = [
    {
      title: "Fitness App",
      description: "Aplicación para seguimiento de entrenamiento y administración de rutinas con Flask y PostgreSQL.",
      tech: ["Flask", "PostgreSQL", "Bootstap", "Docker"],
      category: "Web",
      github: "https://github.com/Marrcos15/fitness-app",
    },
    {
      title: "Portfolio 3D",
      description: "Portafolio interactivo con animaciones 3D y modo oscuro/claro.",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      category: "Frontend",
      github: "https://github.com/Marrcos15/Marrcos15.github.io",
    },
    {
      title: "API REST",
      description: "API REST con autenticación JWT y PostgreSQL.",
      tech: ["Flask", "PostgreSQL", "JWT"],
      category: "Backend",
      github: "#",
    },
  ];

  const categories = ["Todos", "Web", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden transition-colors duration-500"
    >
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl w-full"
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 dark:text-cyan-600">Proyectos</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border border-cyan-500 dark:border-cyan-600 text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-cyan-500 dark:bg-cyan-600 text-black dark:text-white"
                  : "text-cyan-400 dark:text-cyan-600 hover:bg-cyan-500/10 dark:hover:bg-cyan-600/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white/5 dark:bg-white/70 backdrop-blur-xl border border-white/10 dark:border-gray-200 rounded-2xl p-6 text-left w-full max-w-sm shadow-lg hover:scale-[1.03] transition-transform"
              >
                <h3 className="text-2xl font-semibold text-white dark:text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-cyan-500/10 dark:bg-cyan-600/10 text-cyan-400 dark:text-cyan-600 px-2 py-1 rounded-md border border-cyan-500/20 dark:border-cyan-600/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 dark:text-gray-700 hover:text-cyan-400 dark:hover:text-cyan-600 transition">
                    <FaGithub /> Código
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
