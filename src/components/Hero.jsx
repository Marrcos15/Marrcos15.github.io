import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4"
    >
      <GradientBackground />

      {/* Luces decorativas */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full top-1/3 left-1/4 animate-pulse" />
      <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full bottom-1/3 right-1/4 animate-[pulse_4s_ease-in-out_infinite]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl p-8 bg-white/10 dark:bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/10 dark:border-gray-200 shadow-2xl transition-colors duration-500"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white dark:text-gray-900">
          Hola, soy{" "}
          <span className="text-cyan-400 dark:text-cyan-600">Marcos González</span>
        </h1>
        <p className="text-gray-300 dark:text-gray-700 mb-10 text-lg md:text-xl">
          Desarrollador{" "}
          <span className="text-cyan-400 dark:text-cyan-600">Full Stack</span> con pasión por el diseño moderno y funcional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-xl shadow hover:bg-cyan-400 transition-all dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:text-white"
          >
            Ver Proyectos
          </a>
          <a
            href="/CV_MarcosGonzalez.pdf"
            download
            className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all dark:border-cyan-600 dark:text-cyan-600 dark:hover:bg-cyan-600/10"
          >
            Descargar CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
