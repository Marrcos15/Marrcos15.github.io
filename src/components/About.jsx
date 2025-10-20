import { motion } from "framer-motion";
import { FaPython, FaGithub, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiFlask, SiPostgresql, SiFastapi, SiGit, SiDjango, SiDocker } from "react-icons/si";
import GradientBackground from "./GradientBackground";

function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden transition-colors duration-500"
    >
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl backdrop-blur-xl bg-white/5 dark:bg-white/70 p-10 rounded-2xl border border-white/10 dark:border-gray-200 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 dark:text-cyan-600">
          Sobre mí
        </h2>

        <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-10 text-lg">
          Soy <span className="font-semibold text-white dark:text-gray-900">Marcos González</span>, 
          <span className="text-cyan-400 dark:text-cyan-600"> Full Stack Developer </span> 
          con experiencia en el desarrollo de soluciones web completas, automatización de procesos 
          y gestión de bases de datos. Me apasiona crear productos eficientes, bien estructurados 
          y alineados con los objetivos del negocio.
          <br /><br />
          En mi trayectoria he trabajado con tecnologías como 
          <span className="text-cyan-400 dark:text-cyan-600"> Python (Flask, Django, FastAPI) y SQL</span>, 
          aplicando buenas prácticas de código, control de versiones con Git y despliegues optimizados. 
          Me considero una persona analítica, resolutiva y en constante aprendizaje.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
