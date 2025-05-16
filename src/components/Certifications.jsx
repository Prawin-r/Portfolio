import { motion } from "framer-motion";
import powerbiImg from "../assets/PowerBi.jpeg";
import oracleImg from "../assets/Oracle.jpg";
import frontendImg from "../assets/Frontend.jpeg";
import tableauImg from "../assets/Tableau.jpeg";

const certifications = [
  {
    title: "Data Analysis and Visualization with Power BI",
    provider: "Microsoft",
    year: "2024",
    description: "Created dashboards and visual reports using Power BI.",
    image: powerbiImg,
    link: powerbiImg,
  },
  {
    title:
      "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    provider: "Oracle",
    year: "2024",
    description: "Certified in deploying generative AI apps using OCI.",
    image: oracleImg,
    link: oracleImg,
  },
  {
    title: "Front-End Development",
    provider: "Meta",
    year: "2023",
    description:
      "Certified in front-end development using HTML, CSS, JavaScript, and React.",
    image: frontendImg,
    link: frontendImg,
  },
  {
    title: "Data Visualization using Tableau",
    provider: "Tableau",
    year: "2023",
    description:
      "Learned to visualize and communicate insights using Tableau dashboards.",
    image: tableauImg,
    link: tableauImg,
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-white dark:bg-black text-black dark:text-white  pt-16 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold  hero-font text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex w-full h-[400px] gap-6 scrollbar-hide">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="min-w-full md:min-w-[60%] snap-center px-4 perspective"
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto transform transition-transform duration-500">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-semibold hero-font">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 hero-font">
                    {cert.provider} • {cert.year}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 hero-font">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
