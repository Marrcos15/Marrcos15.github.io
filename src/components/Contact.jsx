import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import GradientBackground from "./GradientBackground";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ffpa8ca",
        "template_tfqw63w",
        form.current,
        "------"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          e.target.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          setLoading(false);
        }
      );
  };

   return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center overflow-hidden transition-colors duration-500"
    >
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full backdrop-blur-xl bg-white/5 dark:bg-white/70 p-10 rounded-2xl border border-white/10 dark:border-gray-200 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-10 text-cyan-400 dark:text-cyan-600">Contacto</h2>
        <p className="text-gray-300 dark:text-gray-700 mb-8">
          Si quieres ponerte en contacto conmigo, rellena el siguiente formulario o conéctate a mis redes:
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="user_name"
            placeholder="Tu nombre"
            required
            className="p-3 rounded-lg bg-[#0D1117] dark:bg-white border border-white/20 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 focus:border-cyan-400 outline-none transition-colors duration-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Tu correo electrónico"
            required
            className="p-3 rounded-lg bg-[#0D1117] dark:bg-white border border-white/20 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 focus:border-cyan-400 outline-none transition-colors duration-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje..."
            required
            className="p-3 rounded-lg bg-[#0D1117] dark:bg-white border border-white/20 dark:border-gray-300 text-white dark:text-gray-900 placeholder-gray-400 focus:border-cyan-400 outline-none resize-none transition-colors duration-500"
          ></textarea>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition-all shadow ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-cyan-500 text-black hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:text-white"
            }`}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </motion.button>
        </form>

        {sent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-400 dark:text-green-600"
          >
            ✅ ¡Mensaje enviado con éxito!
          </motion.p>
        )}

        <div className="flex justify-center gap-6 mt-10 text-3xl text-gray-400 dark:text-gray-700">
          <a
            href="https://github.com/Marrcos15"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 dark:hover:text-cyan-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/marcosgonzalez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 dark:hover:text-cyan-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:marcos@example.com"
            className="hover:text-cyan-400 dark:hover:text-cyan-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <footer className="mt-10 text-gray-500 dark:text-gray-600 text-sm">
          © {new Date().getFullYear()} Marcos González — Todos los derechos reservados.
        </footer>
      </motion.div>
    </section>
  );
}

export default Contact;
