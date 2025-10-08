import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg hover:bg-white/20 transition-all"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400 text-xl" title="Modo claro" />
      ) : (
        <FaMoon className="text-blue-500 text-xl" title="Modo oscuro" />
      )}
    </motion.button>
  );
}

export default ThemeToggle;
