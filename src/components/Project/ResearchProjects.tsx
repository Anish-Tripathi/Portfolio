import { motion } from "framer-motion";
import { IoNewspaper } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

interface ResearchProjectsProps {
  setHoveredIndex: (index: number | null) => void;
}

const ResearchProjects: React.FC<ResearchProjectsProps> = ({
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
      title: "Optimizing TCP for Content Delivery",
      description:
        "Research-focused study analyzing how TCP interacts with modern load balancing and caching mechanisms to improve content distribution efficiency. Explores congestion control behaviors, caching strategies, and multi-server architectures through theoretical modeling and practical simulations.",
      tech: [
        "TCP/IP",
        "Load Balancing",
        "Caching Techniques",
        "Network Simulation",
        "Congestion Control",
        "Content Delivery Optimization",
      ],
      link: "https://drive.google.com/file/d/1EoxvMbN7F8MzeXJO4A48T7lnY2bdllQd/view?usp=sharing",
    },
    {
      title: "4-bit Barrel Shifter Implementation and Analysis",
      description:
        "Designed and simulated a 4-bit barrel shifter using multiple digital logic styles including transmission gates, multiplexers, and behavioral modeling. Conducted detailed performance analysis in terms of delay, power, and area using Cadence Virtuoso and Spectre simulation tools.",
      tech: [
        "Cadence Virtuoso",
        "Spectre",
        "Transmission Gate Logic",
        "Multiplexer-Based Design",
        "Delay & Power Analysis",
        "Digital VLSI Design",
      ],
      link: "https://drive.google.com/file/d/1rzsZw7hHOV4eksET7rSWD8zta13W7N4N/view?usp=sharing",
    },
    {
      title: "Advanced Smart Room System",
      description:
        "Pioneering research on automated living spaces implementing digital logic for environment optimization. Features novel algorithms for occupancy detection and energy usage minimization with comprehensive simulation models for validation.",
      tech: [
        "Logisim",
        "Finite State Machines",
        "Counters",
        "Logic Gates",
        "Sensor Integration",
        "Energy Efficiency",
      ],
      link: "https://drive.google.com/file/d/1p-NvkEjdMjjYbrYGD_1R5II_7WSvWO8_/view?usp=sharing",
    },
    {
      title: "Intelligent Agricultural Monitoring",
      description:
        "Groundbreaking research on precision agriculture leveraging sensor networks and predictive analytics for optimal crop yields. Includes novel methodologies for water conservation and soil nutrient management based on real-time environmental data.",
      tech: [
        "IoT Architecture",
        "Machine Learning",
        "Environmental Sensing",
        "Water Management",
        "Crop Science",
        "Data Visualization",
      ],
      link: "https://drive.google.com/file/d/1btCI7YGZtIoYio5yi6GuGXfZmE511r7e/view?usp=sharing",
    },
    {
      title: "SOI Fin-FET Circuit Modeling",
      description:
        "Cutting-edge research developing high-fidelity equivalent circuit models for advanced semiconductor devices. Features innovative approaches to modeling quantum effects and performance optimization for next-generation integrated circuits.",
      tech: [
        "Semiconductor Physics",
        "Circuit Modeling",
        "Quantum Effects",
        "SPICE Simulation",
        "Nanoscale Electronics",
        "High-Performance Computing",
      ],
      link: "https://drive.google.com/file/d/1CnZrSPq2iXuqhqLSevsd49tBbQRR5LUM/view?usp=sharing",
    },
    {
      title: "Quantum Computing Fundamentals",
      description:
        "Comprehensive exploration of quantum computing principles with novel insights into practical implementation challenges. Features original analysis of quantum algorithms and their potential impact on cryptography and optimization problems.",
      tech: [
        "Quantum Mechanics",
        "Quantum Algorithms",
        "Qubit Architecture",
        "Quantum Gates",
        "Quantum Cryptography",
        "Quantum Information Theory",
      ],
      link: "https://drive.google.com/file/d/1fEhO8Le2Py_6IEXutAZx9Y7dx2qLN0v5/view?usp=sharing",
    },
    {
      title: "Dual-Band 5G Antenna Design",
      description:
        "Innovative research on next-generation telecommunications infrastructure with breakthrough antenna designs for optimal signal propagation. Features novel miniaturization techniques while maintaining exceptional performance across multiple frequency bands.",
      tech: [
        "Microstrip Technology",
        "RF Engineering",
        "Electromagnetic Simulation",
        "Antenna Arrays",
        "Signal Propagation",
        "Wireless Communications",
      ],
      link: "https://drive.google.com/file/d/1B_UwxrdWajpvo7dlx7hNjE7Lqz6a3jXY/view?usp=sharing",
    },
  ];

  return (
    <motion.div className="mb-16" variants={itemVariants}>
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
        <h2 className="text-4xl font-bold text-white mx-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Research Projects
          </span>
        </h2>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300 h-full"
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
            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
              <IoNewspaper className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-full text-xs text-gray-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto">
              <a
                href={project.link}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Research Paper</span>
                <FiExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResearchProjects;
