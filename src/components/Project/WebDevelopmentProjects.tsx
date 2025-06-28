import { motion } from "framer-motion";
import { FaSquareGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface WebDevelopmentProjectsProps {
  setHoveredIndex: (index: number | null) => void;
}

const WebDevelopmentProjects: React.FC<WebDevelopmentProjectsProps> = ({
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
      title: "StayFinder",
      description:
        "Developed a full-stack property booking platform for The Glen, India’s premier hospitality service company, during a 2-month paid internship, earning an incentive for exceptional work.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Express",
        "Socket.io",
        "MongoDB",
        "Stripe",
        "Leaflet",
      ],
      link: "https://github.com/Anish-Tripathi/StayFinder",
      demo: "",
      image: "/StayFinder.png",
      category: "internship",
    },
    {
      title: "LeetAssist",
      description:
        "Contributed to Screen By AI’s flagship product Slingshot, an AI-powered mock interview and coding assistant platform, during a paid 1-month internship. Features problem breakdowns, optimized code solutions, and real-time feedback via a Chrome extension.",
      tech: [
        "React",
        "Chrome Extension",
        "OpenAI API",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://github.com/Anish-Tripathi/LeetAssist",
      demo: "",
      image: "/LeetAssist.png",
      category: "internship",
    },
    {
      title: "TrackWise",
      description:
        "Developed a personal finance and transaction tracking web app for AMRR TechSols Pvt. Ltd. as part of a 3-month paid internship. Features secure Clerk authentication, real-time expense and income management, categorized transaction insights, and a responsive dashboard.",
      tech: [
        "React",
        "Clerk",
        "Tailwind CSS",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "JWT",
        "Axios",
      ],
      link: "https://github.com/Anish-Tripathi/TrackWise",
      demo: "https://trackwise.vercel.app/",
      image: "/trackwise.png",
      category: "internship",
    },
    {
      title: "GigFloww Dashboard",
      description:
        "Built a modern HR management dashboard for GigFloww, a US/UK-based HR consultancy, as a paid 1-month internship project. Features intuitive interfaces for candidate tracking, onboarding workflows, and workforce analytics, crafted using Shadcn UI for a responsive experience.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Vite",
        "Zustand",
        "React Router",
      ],
      link: "https://github.com/Anish-Tripathi/GigFloww-Dashboard",
      demo: "https://gig-floww-dashboard.vercel.app/",
      image: "/gigfloww.png",
      category: "internship",
    },
    {
      title: "Calcify",
      description:
        "Developed a sleek, intelligent calculator with step-by-step explanations and natural language input for Oasis Infobyte Solution Pvt Ltd as an unpaid virtual internship project. Supports basic arithmetic to advanced scientific functions with a responsive UI.",
      tech: ["ReactJS", "Bootstrap", "Context API", "Math.js", "CSS Grid"],
      link: "https://github.com/Anish-Tripathi/Calcify",
      demo: "https://calcify-tau.vercel.app/",
      image: "/Calcify.png",
      category: "internship",
    },
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
      category: "personal",
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
      category: "personal",
    },
    {
      title: "DineSmart",
      description:
        "Full-stack restaurant platform with smart filtering, live order tracking, OTP-based authentication, and secure Google OAuth. Features include role-based access, real-time table availability, Stripe payments, and a seamless customer/restaurant dashboard.",
      tech: ["React", "Module CSS", "Express", "MongoDB", "Node.js", "JWT"],
      link: "https://github.com/Anish-Tripathi/DineSmart",
      demo: "https://example.com/dinesmart",
      image: "/DineSmart.png",
      category: "personal",
    },
    {
      title: "SumUp",
      description:
        "SumUp is a smart AI-powered Chrome extension that transforms articles and PDFs into concise, detailed, or bullet-point summaries. It supports multilingual translation, distraction-free reading, summary downloads, history tracking, and follow-up questions—everything right within your browser.",
      tech: ["JavaScript", "Chrome Extension", "OpenAI API", "HTML", "CSS"],
      link: "https://github.com/Anish-Tripathi/SumUp",
      demo: "",
      image: "/SumUp.png",
      category: "personal",
    },
    {
      title: "DeliverEase",
      description:
        "DeliverEase is a responsive web app for simulating last-mile delivery. It features live tracking, interactive routes with OpenStreetMap, flexible order booking, and automated distance and price estimation based on delivery factors like parcel weight, size, priority, and more. It also supports multi-stop deliveries, all managed through a clean, user-friendly dashboard.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "OpenStreetMap API",
        "Geolocation services",
        "Bootstrap",
        "LocalStorage",
      ],
      link: "https://github.com/Anish-Tripathi/DeliverEase",
      demo: "https://example.com/deliverease",
      image: "/deliverEase.png",
      category: "personal",
    },
    {
      title: "FlashFeed",
      description:
        "FlashFeed is a one-stop portal for real-time, categorized news from trusted sources around the globe. Built using HTML, CSS, and Vanilla JavaScript, FlashFeed pulls the latest headlines using a News API and presents them in a fast, intuitive, and visually appealing interface.",
      tech: ["HTML5", "CSS3", "JavaScript", "News API", "Responsive Design"],
      link: "https://github.com/Anish-Tripathi/FlashFeed",
      demo: "https://flash-feed-amber.vercel.app/",
      image: "/flashFeed.png",
      category: "personal",
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
      category: "personal",
    },
    {
      title: "TaskFlow",
      description:
        "A simple task manager built to practice React basics like hooks and state. Allows users to add, delete, and mark tasks as done, with optional dark/light mode and basic styling using Bootstrap.",
      tech: ["ReactJS", "Bootstrap", "React Hooks"],
      image: "/ToDoList.png",
      category: "personal",
    },
    {
      title: "Tic Tac Toe",
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
      category: "personal",
    },
    {
      title: "Connectify",
      description:
        "A beginner-friendly social media UI project designed to mimic the core layout and interactions of modern platforms. Includes post cards, user profiles, follow buttons, and a basic responsive feed layout to practice frontend skills.",
      tech: ["React", "Bootstrap", "Node.js"],
      image: "/Connectify.png",
      category: "personal",
    },
    {
      title: "FoodList",
      description:
        "Basic food listing app created to explore state management in React. Lets users add and reorder items with simple animations and persistent state using local storage.",
      tech: ["ReactJS", "Bootstrap"],
      image: "/FoodList.png",
      category: "personal",
    },
  ];

  const internshipProjects = projects.filter(
    (project) => project.category === "internship"
  );
  const personalProjects = projects.filter(
    (project) => project.category === "personal"
  );

  const renderProjectSection = (
    title: string,
    projectList: typeof projects,
    sectionIndex: number
  ) => (
    <motion.div className="mb-24" variants={itemVariants}>
      <div className="flex items-center justify-center mb-16">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
        <h2 className="text-4xl font-bold text-white mx-4 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {title}
          </span>
        </h2>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <motion.div
            key={`${sectionIndex}-${index}`}
            className="p-6 rounded-xl border border-zinc-800 shadow-lg transform transition duration-300 h-full"
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              borderColor: "rgba(139, 92, 246, 0.3)",
            }}
            onMouseEnter={() => setHoveredIndex(sectionIndex * 100 + index)}
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
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareGithub size={16} />
                      <span>Code</span>
                    </a>
                  )}
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

  return (
    <>
      {renderProjectSection("Paid/Internship Projects", internshipProjects, 1)}
      {renderProjectSection("Featured Projects", personalProjects, 2)}
    </>
  );
};

export default WebDevelopmentProjects;
