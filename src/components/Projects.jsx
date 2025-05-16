import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tunewaveImg from "../assets/tunewave.png";
import flightBookingImg from "../assets/flight-booking.png";
import sentimentImg from "../assets/sentiment-analysis.jpg";
import cyberbullyingImg from "../assets/cyberbullying.jpg";
import mentalHealthImg from "../assets/mental-health.png";
import porscheImg from "../assets/porsche.png";
import useTheme from "../hooks/usetheme";
import bgLight from "../assets/bg-3.jpg";
import bgDark from "../assets/bg.jpg";

const projects = [
  {
    title: "Flight Booking Website",
    tech: "Angular, TypeScript, SCSS",
    description:
      "A FlixBus-inspired platform with login, booking, responsive UI, and search filters.",
    link: "https://angular-flight-booking.vercel.app/",
    image: flightBookingImg,
  },
  {
    title: "Porsche 3D Showcase Website",
    tech: "React, Tailwind CSS, Framer Motion",
    description:
      "Immersive Porsche-themed website with 3D model views, video background, and animations.",
    link: "https://porsche-webpage.vercel.app/",
    image: porscheImg,
  },
  {
    title: "Tunewave Music App",
    tech: "Flutter, Dart, Firebase",
    description:
      "A feature-rich music app with playlist support, real-time streaming, and offline playback.",
    link: "https://tune-wave-music-app.vercel.app/",
    image: tunewaveImg,
  },
  {
    title: "Sentiment Analysis Tool",
    tech: "Python, RoBERTa, VADER, Streamlit",
    description:
      "Dashboard comparing VADER and RoBERTa models on Amazon reviews.",
    link: "https://sentimentanalysistool-mrapa9ebrtg3xcdgegwlxb.streamlit.app/",
    image: sentimentImg,
  },
  {
    title: "Cyberbullying Detection",
    tech: "BERT, TensorFlow, Python",
    description:
      "Detects toxic content using NLP and shows classification results visually.",
    link: "#",
    image: cyberbullyingImg,
  },
  {
    title: "Mental Health Tracker",
    tech: "ML (Random Forest, Elastic Net)",
    description:
      "Predicts mental health wellness with CSV input, ML models and visualization.",
    link: "#",
    image: mentalHealthImg,
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  // Choose background image based on theme
  const bgImage = theme === "dark" ? bgDark : bgLight;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 pt-12 px-6 md:px-16 bg-fixed bg-center bg-cover text-gray-900 dark:text-white transition-colors duration-500"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to darken/lighten the background */}
      <div
        className={`absolute inset-0 z-0 ${
          theme === "dark" ? "bg-black/30" : "bg-white/30"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 hero-font">
          Featured Projects
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* Project List for Small Screens */}
          <div className="flex flex-col gap-6 md:hidden">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-xl shadow-md overflow-hidden transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-900"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold hero-font">
                    {project.title}
                  </h3>
                  <p className="text-blue-500 text-sm font-medium mt-1">
                    {project.tech}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm transition"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Preview (for md and above) */}
          <div className="hidden md:flex md:w-2/3 sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl shadow-lg overflow-hidden w-full transition-colors duration-500 ${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold hero-font mb-2">
                    {projects[activeIndex].title}
                  </h3>
                  <p className="text-blue-500 font-medium mb-1">
                    {projects[activeIndex].tech}
                  </p>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {projects[activeIndex].description}
                  </p>
                  <a
                    href={projects[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Titles List (for md and above) */}
          <div className="hidden md:flex md:w-1/3 flex-col gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-4 rounded-lg border transition hero-font ${
                  activeIndex === index
                    ? theme === "dark"
                      ? "bg-blue-900 border-blue-500 text-white scale-105 shadow-lg"
                      : "bg-blue-100 border-blue-500 text-black scale-105 shadow-lg"
                    : theme === "dark"
                    ? "bg-white/10 border-white/30 text-white hover:bg-white/20"
                    : "bg-white/10 border-gray-300 text-gray-900 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {project.title}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;