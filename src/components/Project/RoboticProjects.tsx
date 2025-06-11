import { motion } from "framer-motion";
import { FaSquareGithub } from "react-icons/fa6";

interface RoboticProjectsProps {
  setHoveredIndex: (index: number | null) => void;
}

const RoboticProjects: React.FC<RoboticProjectsProps> = ({
  setHoveredIndex,
}) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      title: "Combat-Ready Fight Bot",
      description:
        "Award-winning combat robot featuring real-time telemetry, adaptive control systems, and modular weapon attachments. Implemented low-latency communication via MQTT protocol for precise control in high-intensity competitive environments.",
      tech: [
        "IoT",
        "Mosquito Server",
        "Wireless Control",
        "Sensor Fusion",
        "3D Printed Chassis",
        "Real-time Telemetry",
      ],
      link: "https://github.com/Anish-Tripathi",
      image: "/FightBot.png",
    },
    {
      title: "Precision AgriTech System",
      description:
        "Next-generation agricultural monitoring platform integrating multiple environmental sensors with machine learning for crop yield optimization. Features automated irrigation control, pest detection, and mobile app integration for remote monitoring.",
      tech: [
        "IoT",
        "Soil Moisture Analysis",
        "Temperature Monitoring",
        "Water Management",
        "Solar Power",
        "Data Analytics",
        "Machine Learning",
      ],
      link: "https://github.com/Anish-Tripathi",
      image: "/AgriTech.png",
    },
  ];

  return (
    <motion.div className="mb-24" variants={itemVariants}>
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
        <h2 className="text-4xl font-bold text-white mx-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Robotic Projects
          </span>
        </h2>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300"
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-lg mb-6 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <div className="p-4 w-full flex justify-center space-x-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={project.link}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareGithub size={16} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full text-xs text-gray-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RoboticProjects;
