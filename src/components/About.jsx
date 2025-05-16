import { motion } from "framer-motion";
import "./Hero.css";
import bgImage from "../assets/bg.jpg";
import useTheme from "../hooks/usetheme";
import bgLight from "../assets/bg-3.jpg";
import bgDark from "../assets/bg.jpg";



const skills = [
  { icon: "fab fa-react", label: "React", color: "text-blue-500" },
  { icon: "fab fa-angular", label: "Angular", color: "text-red-600" },
  { icon: "fab fa-java", label: "Java", color: "text-orange-600" },
  { icon: "fas fa-code", label: "Dart", color: "text-blue-400" },
  { icon: "fas fa-brain", label: "AI & ML", color: "text-green-500" },
  { icon: "fas fa-database", label: "Database", color: "text-orange-500" },
  { icon: "fab fa-python", label: "Python", color: "text-yellow-500" },
  { icon: "fab fa-node", label: "Node.js", color: "text-green-600" },
  { icon: "fas fa-mobile-alt", label: "Flutter", color: "text-cyan-500" },
  { icon: "fas fa-fire", label: "Firebase", color: "text-yellow-400" },
  { icon: "fas fa-layer-group", label: "AEM", color: "text-purple-600" },
];


const About = () => {
  const { theme } = useTheme();
  const bgImage = theme === "dark" ? bgDark : bgLight;

  return (
    <section
      id="about"
      className="bg-white dark:bg-black/80 text-gray-900 dark:text-white pt-12 py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        {/* About Me Heading and Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-font">
            About Me
          </h2>
          <p className="text-lg leading-7 text-gray-700 dark:text-gray-300 hero-font ">
            Hello! I’m{" "}
            <strong className="text-black dark:text-white mb-4">
              Prawinraj
            </strong>
            , a software developer passionate about crafting meaningful digital
            experiences. My core expertise lies in full-stack development using
            tools like React, Angular, and Flutter, and I have a strong
            foundation in AI & machine learning. I'm driven to build tech that
            empowers, inspires, and solves real-world problems. Whether it's
            developing intelligent interfaces or deploying scalable
            applications, I love bridging the gap between ideas and innovation.
          </p>
          <br />
        </motion.div>

        {/* Dynamic Background Quote Section */}
        <section
          className="relative w-full bg-fixed bg-center bg-cover bg-no-repeat py-4 px-4 md:px-24 transition-all duration-500"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="w-full h-full flex items-center justify-center px-0">
            <motion.p
              className="cutout-text w-full max-w-4xl text-3xl md:text-4xl text-center font-semibold tracking-wide hero-font quote-effect px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              “Code with purpose. Build with impact.”
            </motion.p>
          </div>
        </section>

        {/* Tech Stack Title */}
        <motion.h3
          className="text-2xl md:text-3xl font-semibold mt-10 mb-10 hero-font"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h3>

        {/* Smooth Scrolling Skill Icons */}
        <div className="relative overflow-hidden h-24">
          {/* Optional edge fade effects */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 w-max"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[100px]"
              >
                <i className={`${skill.icon} text-4xl ${skill.color}`} />
                <span className="text-sm text-gray-800 dark:text-white mt-2 hero-font">
                  {skill.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;