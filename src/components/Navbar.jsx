import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./Hero.css";
import logo from "../assets/logo.png"; 


const navItems = ["about", "projects", "certifications", "contact"];

const mobileMenuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Toggle dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
              heroSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="focus:outline-none"
        >
          <img
            src={logo}
            alt="Prawinraj Logo"
            className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 uppercase hero-font text-sm lg:text-lg tracking-wide">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-blue-500 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Theme + Hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/40 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 rounded bg-white/30 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Sliding Menu */}
            <motion.div
              key="mobile-menu"
              ref={menuRef}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-gray-900 shadow-xl z-50 flex flex-col p-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="self-end mb-8 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FiX size={28} />
              </button>

              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    variants={itemVariants}
                    className="uppercase text-lg font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
