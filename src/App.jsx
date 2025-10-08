import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0D1117] dark:bg-gray-50 text-white dark:text-gray-900 transition-colors duration-500 overflow-x-hidden">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
