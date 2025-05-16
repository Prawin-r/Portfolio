import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import useTheme from "../hooks/usetheme";
import myPhoto from "../assets/prawinraj.jpg";
import bgLight from "../assets/bg-3.jpg";
import bgDark from "../assets/bg.jpg";

const skills = [
  "React",
  "Flutter",
  "AI & Machine Learning",
  "Full-Stack Development",
];

const Hero = () => {
  const { theme } = useTheme();
  const backgroundImage = theme === "dark" ? bgDark : bgLight;

  return (
    <section
      id="hero"
      className="relative min-h-[120vh] bg-cover bg-center bg-fixed flex items-center justify-center transition-all duration-700"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center py-32 px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.3,
          }}
          className="flex-shrink-0 rounded-full shadow-lg"
          style={{ perspective: 600 }}
        >
          <img
            src={myPhoto}
            alt="Prawinraj"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-300 dark:border-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center md:text-left max-w-2xl text-black dark:text-white"
        >
          <motion.h1
            className="text-4xl md:text-6xl hero-font mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Prawinraj
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl mb-6 hero-font drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Software Developer crafting{" "}
            <span className="text-blue-500 dark:text-blue-300 font-semibold">
              modern experiences
            </span>{" "}
            with{" "}
            <span className="inline-block min-w-[260px] font-semibold text-blue-500 dark:text-blue-300">
              <Typewriter
                words={skills}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 bg-opacity-90 text-white rounded-full hover:bg-blue-700 transition-transform hero-font shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            View My Work →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;