import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    category: string;
    technologies: string[];
  }
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // In a real app, this would be an API call to your backend
        // const response = await fetch('/api/services');
        // const data = await response.json();

        // Enhanced service data with categories and more detailed descriptions
        const data = [
          {
            id: 1,
            title: "Web Development",
            description:
              "Full-stack solutions with MERN stack (MongoDB, Express, React, Node.js). Building scalable and maintainable web applications that deliver exceptional user experiences.",
            icon: "code",
            category: "development",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
          },
          {
            id: 2,
            title: "Frontend Optimization",
            description:
              "Performance-focused, responsive UI design with modern frameworks. Optimizing load times, improving accessibility, and creating intuitive user interfaces.",
            icon: "desktop",
            category: "design",
            technologies: ["React", "Redux", "Tailwind CSS", "GSAP"],
          },
          {
            id: 3,
            title: "Backend Development",
            description:
              "Secure, scalable APIs & database management systems. Building robust server architectures that handle high traffic loads and complex business logic.",
            icon: "server",
            category: "development",
            technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
          },
          {
            id: 4,
            title: "API Integration",
            description:
              "Connecting third-party services seamlessly into your application. Creating unified experiences by leveraging the best tools and platforms in the industry.",
            icon: "plug",
            category: "development",
            technologies: ["REST", "GraphQL", "OAuth", "Webhooks"],
          },
          {
            id: 5,
            title: "SEO & Performance",
            description:
              "Boosting speed & search rankings to maximize visibility. Implementing best practices for search engine optimization and core web vitals.",
            icon: "chart-line",
            category: "marketing",
            technologies: [
              "Lighthouse",
              "Google Analytics",
              "SEO",
              "Web Vitals",
            ],
          },
          {
            id: 6,
            title: "Code Review & Consulting",
            description:
              "Helping teams improve their projects through expert advice. Providing technical guidance, architecture planning, and performance optimization strategies.",
            icon: "search",
            category: "consulting",
            technologies: [
              "Code Quality",
              "Best Practices",
              "Architecture",
              "Mentoring",
            ],
          },
          {
            id: 7,
            title: "UI/UX Design",
            description:
              "Creating beautiful, intuitive interfaces that users love. Focusing on user-centered design principles to enhance product adoption and satisfaction.",
            icon: "palette",
            category: "design",
            technologies: ["Figma", "Adobe XD", "User Testing", "Wireframing"],
          },
          {
            id: 8,
            title: "DevOps & Deployment",
            description:
              "Streamlining development workflows and automating deployment processes. Setting up CI/CD pipelines and cloud infrastructure.",
            icon: "cloud",
            category: "development",
            technologies: ["AWS", "Docker", "GitHub Actions", "Kubernetes"],
          },
        ];

        setServices(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch services");
        setIsLoading(false);
        console.error("Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  const filterServices = () => {
    if (activeTab === "all") {
      return services;
    }
    return services.filter((service) => service.category === activeTab);
  };

  // Animation variants for Framer Motion
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
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-middle"></div>
          <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
            Loading services...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="text-red-500 text-5xl mb-4">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Error
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const categories = [
    { id: "all", name: "All Services" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "consulting", name: "Consulting" },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="services"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Expert Services
            <span className="block text-blue-600">Tailored to Your Needs</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I specialize in building scalable web applications, optimizing
            backend performance, and crafting modern UI/UX experiences. With a
            focus on quality and innovation, I deliver solutions that exceed
            expectations.
          </p>
        </motion.div>

        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filterServices().map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4 text-3xl text-blue-600 group-hover:text-blue-500 transition-colors duration-300">
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 bg-blue-800 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose My Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p className="ml-3 text-white text-lg">
                    Clean, maintainable code following industry best practices
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p className="ml-3 text-white text-lg">
                    Advanced problem-solving skills and meticulous attention to
                    detail
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p className="ml-3 text-white text-lg">
                    Experience with cutting-edge technologies and frameworks
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p className="ml-3 text-white text-lg">
                    Clear communication and effective project management
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-white rounded-full bg-blue-500 flex items-center justify-center">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p className="ml-3 text-white text-lg">
                    Unwavering commitment to deadlines and exceeding
                    expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 md:ml-8 text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-inner">
                <div className="text-5xl text-blue-600 mb-4">
                  <i className="fas fa-trophy"></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  100% Satisfaction
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Committed to delivering exceptional quality and results on
                  every project
                </p>
                <button
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mt-4 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
