import { motion } from "framer-motion";
import { FaSquareGithub } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Project() {
  const [, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen"
      style={{ scrollBehavior: "smooth", marginTop: "90px" }}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-5 text-center relative z-10">
        <h1 className=" py-3 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-5">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto ">
          Exploring the intersection of code and creativity through innovative
          solutions.
        </p>
      </div>

      <motion.section
        className="py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Web Development Projects Section */}
          <motion.div className="mb-24" variants={itemVariants}>
            <div className="flex items-center justify-center mb-16">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
              <h2 className="text-4xl font-bold text-white mx-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Web Development Projects
                </span>
              </h2>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "CodeCollab",
                  description:
                    "AI-powered collaborative coding platform with real-time code editing, video/audio chat using WebRTC, and intelligent code assistance via LangChain and Pinecone. Built for pair programming, mock interviews, and team collaboration with a smart developer experience.",
                  tech: [
                    "Next.js",
                    "FastAPI",
                    "WebRTC",
                    "WebSockets",
                    "LangChain",
                    "Pinecone",
                    "JWT",
                    "OAuth2",
                  ],
                  link: "https://github.com/Anish-Tripathi/CodeCollab",
                  demo: "https://example.com/codecollab",
                  image: "/CodeCollab.png",
                },
                {
                  title: "SwapStay",
                  description:
                    "A comprehensive room swapping and guest house booking platform tailored for students. Features role-based access control, OTP-based email activation, real-time chat using WebSockets, and a dedicated mess booking module. Includes Stripe-powered payments, receipt generation, advanced filtering, and multi-theme support for a seamless user experience.",
                  tech: [
                    "React",
                    "Firebase",
                    "MongoDB",
                    "Express",
                    "Node.js",
                    "JWT",
                    "WebSockets",
                    "Stripe API",
                  ],
                  link: "https://github.com/Anish-Tripathi/SwapStay",
                  demo: "https://example.com/swapstay",
                  image: "/SwapStay.png",
                },
                {
                  title: "DineSmart",
                  description:
                    "Full-stack restaurant platform with smart filtering, live order tracking, OTP-based authentication, and secure Google OAuth. Features include role-based access, real-time table availability, Stripe payments, and a seamless customer/restaurant dashboard.",
                  tech: [
                    "React",
                    "Module CSS",
                    "Express",
                    "MongoDB",
                    "Node.js",
                    "JWT",
                  ],
                  link: "https://github.com/Anish-Tripathi/DineSmart",
                  demo: "https://example.com/dinesmart",
                  image: "/DineSmart.png",
                },
                {
                  title: "DeliverEase",
                  description:
                    "Logistics platform simulating last-mile delivery optimization using Dijkstra’s algorithm. Supports live tracking with OpenStreetMap, responsive UI, dynamic route updates, and user-friendly delivery visualization.",
                  tech: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "OpenStreetMap API",
                    "Dijkstra Algorithm",
                    "Bootstrap",
                    "LocalStorage",
                  ],
                  link: "https://github.com/Anish-Tripathi/DeliverEase",
                  demo: "https://example.com/deliverease",
                  image: "/deliverEase.png",
                },
                {
                  title: "CodeClarify",
                  description:
                    "AI-powered Chrome extension that provides contextual code explanations and summaries. Uses the OpenAI API for code analysis, Prism.js for syntax highlighting, and Tailwind CSS for modern UI. Ideal for learning, reviewing, or debugging unfamiliar code.",
                  tech: [
                    "React",
                    "Chrome Extension",
                    "OpenAI API",
                    "Prism.js",
                    "Tailwind CSS",
                  ],
                  link: "https://github.com/Anish-Tripathi/CodeClarify",
                  demo: "https://example.com/codeclarify",
                  image: "/CodeClarify.png",
                },
                {
                  title: "SkyCast",
                  description:
                    "Interactive weather dashboard with hourly and weekly forecasts, geolocation-based updates, and historical weather trends using Chart.js. Integrates OpenWeatherMap API and radar maps for accurate and visually rich weather insights.",
                  tech: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Node.js",
                    "Express",
                    "OpenWeatherMap API",
                    "Geolocation API",
                  ],
                  link: "https://github.com/Anish-Tripathi/SkyCast",
                  demo: "https://nebula-weather.vercel.app/",
                  image: "/weather.png",
                },
                {
                  title: "Calcify",
                  description:
                    "Calcify is a sleek, intelligent calculator designed for real-world usability and clarity. It supports everything from basic arithmetic to advanced scientific functions, and goes beyond traditional calculators by providing step-by-step explanations, natural language input, and a responsive, visually refined UI.",
                  tech: [
                    "ReactJS",
                    "Bootstrap",
                    "Context API",
                    "Math.js",
                    "CSS Grid",
                  ],
                  link: "https://github.com/Anish-Tripathi/Calcify",
                  demo: "https://calcify-tau.vercel.app/",
                  image: "/Calcify.png",
                },
                {
                  title: "FlashFeed",
                  description:
                    "FlashFeed is a one-stop portal for real-time, categorized news from trusted sources around the globe. Built using HTML, CSS, and Vanilla JavaScript, FlashFeed pulls the latest headlines using a News API and presents them in a fast, intuitive, and visually appealing interface.",
                  tech: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "News API",
                    "Responsive Design",
                  ],
                  link: "https://github.com/Anish-Tripathi/FlashFeed",
                  demo: "https://flash-feed-amber.vercel.app/",
                  image: "/flashFeed.png",
                },
                {
                  title: "Tic-Tac-Toe",
                  description:
                    "Interactive game with smart winning detection algorithms, animated transitions between moves, and a sleek minimalist design. Features game history tracking and customizable player avatars.",
                  tech: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "LocalStorage API",
                    "CSS Animations",
                  ],
                  link: "https://github.com/Anish-Tripathi/Tic-Tac-Toe",
                  demo: "https://tic-tac-toe-indol-kappa.vercel.app/",
                  image: "/TicTacToe.png",
                },
                {
                  title: "ToDoList",
                  description:
                    "A simple task manager built to practice React basics like hooks and state. Allows users to add, delete, and mark tasks as done, with optional dark/light mode and basic styling using Bootstrap.",
                  tech: ["ReactJS", "Bootstrap", "React Hooks"],
                  image: "/ToDoList.png",
                },
                {
                  title: "Connectify",
                  description:
                    "A beginner-friendly social media UI project designed to mimic the core layout and interactions of modern platforms. Includes post cards, user profiles, follow buttons, and a basic responsive feed layout to practice frontend skills.",
                  tech: ["React", "Bootstrap", "Node.js"],
                  image: "/Connectify.png",
                },

                {
                  title: "FoodList",
                  description:
                    "Basic food listing app created to explore state management in React. Lets users add and reorder items with simple animations and persistent state using local storage.",
                  tech: ["ReactJS", "Bootstrap"],
                  image: "/FoodList.png",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
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
                          href={project.demo}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.link}
                          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaSquareGithub size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
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

          {/* Robotic Projects Section */}
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
              {[
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
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
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
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
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

          {/* Research Projects Section */}
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
              {[
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
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-black p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    borderColor: "rgba(139, 92, 246, 0.3)",
                  }}
                  variants={itemVariants}
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6">
                    <IoNewspaper className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
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
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-zinc-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Interested in collaborating?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition duration-300 inline-block"
          >
            Let's Connect
          </Link>
        </div>
      </motion.section>
    </div>
  );
}

export default Project;
