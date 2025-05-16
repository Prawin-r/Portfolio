// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Column 1 - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-white mb-2 hero-font">Prawinraj</h2>
          <p className="text-sm hero-font">
            Software developer passionate about AI, full-stack development, and
            building impactful applications.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white mb-2 hero-font">Quick Links</h3>
          <ul className="space-y-2 text-sm hero-font">
            {["about", "projects", "certifications", "contact"].map((link) => (
              <li key={link}>
                <a href={`#${link}`} className="hover:text-blue-400 capitalize">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="hero-font text-white mb-2">Contact</h3>
          <ul className="space-y-2 text-sm hero-font">
            <li>
              Email:{" "}
              <a
                href="mailto:rajprawin307@gmail.com"
                className="hover:text-blue-400"
              >
                rajprawin307@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/Prawin-r"
                className="hover:text-blue-400"
              >
                Prawin-01
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/prawin-raj-r010504"
                className="hover:text-blue-400"
              >
                prawin-raj
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-8 font-thin hero-font">
        &copy; {new Date().getFullYear()} Prawinraj. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
