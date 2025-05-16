import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import MouseTracker from "./components/MouseTracker";
import "./assets/fonts/fonts.css";



export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white font-sans scroll-smooth">
      <MouseTracker />
      <Navbar theme={theme} setTheme={setTheme} />
   
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      
      <Footer />
      {/* Floating Resume Button */}
      <a
        href="/Prawinraj_Resume.pdf"
        target="_blank"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white hero-font px-4 py-3 rounded-full shadow-lg transition"
      >
        Resume
      </a>
    </div>
  );
}
