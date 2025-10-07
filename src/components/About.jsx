import { motion } from "framer-motion";
import { FaPython, FaReact, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiJavascript } from "react-icons/si";
import GradientBackground from "./GradientBackground";

function About() {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  const timeline = [
    {
      year: "2021",
      title: "Inicio en desarrollo web",
      description: "Comencé mis estudios en programación y desarrollo de aplicaciones web modernas.",
    },
    {
      year: "2023",
      title: "Proyectos personales y primeros clientes",
      description: "Desarrollé aplicaciones con Flask, React y Tailwind, enfocadas en diseño funcional.",
    },
    {
      year: "2025",
      title: "Portafolio profesional",
      description: "Consolidación como Desarrollador Full Stack, integrando diseño y backend.",
    },
  ];

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
        <h2 className="text-4xl font-bold mb-6 text-cyan-400 dark:text-cyan-600">Sobre mí</h2>

        <p className="text-gray-300 dark:text-gray-700 leading-relaxed mb-10 text-lg">
          Soy <span className="text-white dark:text-gray-900 font-semibold">Marcos González</span>, un desarrollador <span className="text-cyan-400 dark:text-cyan-600">Full Stack</span> con pasión por crear soluciones digitales modernas y atractivas. <br /><br />
          Cuento con más de <span className="text-cyan-400 dark:text-cyan-600 font-bold">{yearsOfExperience} años</span> de experiencia en tecnologías como Python, Flask y React.
        </p>

        {/* Timeline */}
        <div className="space-y-8 text-left max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-l-2 border-cyan-500 dark:border-cyan-600 pl-6 relative"
            >
              <span className="absolute -left-3 top-2 w-4 h-4 bg-cyan-500 dark:bg-cyan-600 rounded-full"></span>
              <h3 className="text-xl font-semibold text-white dark:text-gray-900">{item.title}</h3>
              <p className="text-sm text-cyan-400 dark:text-cyan-600">{item.year}</p>
              <p className="text-gray-300 dark:text-gray-700 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-6 text-4xl text-gray-400 dark:text-gray-700 mt-12">
          <FaPython className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <SiFlask className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <FaReact className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <SiTailwindcss className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <SiJavascript className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <FaHtml5 className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <FaCss3Alt className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
          <FaGithub className="hover:text-cyan-400 dark:hover:text-cyan-600 transition" />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
