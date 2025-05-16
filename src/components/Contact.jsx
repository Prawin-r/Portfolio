import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useTheme from "../hooks/usetheme";
import bgLight from "../assets/bg-3.jpg";
import bgDark from "../assets/bg.jpg";

const iconVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { theme } = useTheme();

  const bgImage = theme === "dark" ? bgDark : bgLight;

  // Text color based on theme
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  // Icon base color for theme
  const iconColor = theme === "dark" ? "text-white" : "text-gray-900";
  // Icon hover color for theme
  const iconHoverColor =
    theme === "dark" ? "hover:text-blue-400" : "hover:text-blue-600";
  // Button background colors (optional)
  const btnBg =
    theme === "dark"
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-blue-500 hover:bg-blue-600";
  const btnTextColor = "text-white";

  return (
    <motion.section
      id="contact"
      className={`relative py-20 ${textColor}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-black/10 "
            : "bg-white/30 "
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className={`text-3xl md:text-4xl font-bold mb-6 hero-font ${textColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className={`text-lg mb-8 hero-font ${textColor} opacity-90`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I'm open to opportunities, collaborations, or even a friendly chat
          about technology.
        </motion.p>

        <div className="flex justify-center space-x-6 text-2xl mb-8">
          {[
            {
              icon: <FaEnvelope />,
              href: "mailto:rajprawin307@gmail.com",
              key: "email",
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/Prawin-01",
              key: "github",
            },
            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/prawin-raj-r010504",
              key: "linkedin",
            },
          ].map(({ icon, href, key }, index) => (
            <motion.a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} ${iconHoverColor} transition transform hover:scale-110`}
              variants={iconVariants}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              aria-label={key}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:rajprawin307@gmail.com"
          className={`inline-block px-6 py-3 rounded-full transition hero-font ${btnBg} ${btnTextColor}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me Now
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
