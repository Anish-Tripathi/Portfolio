import {
  Code2,
  Layers,
  Braces,
  Database,
  Brain,
  Wrench,
  FileCode,
  FilePlus2,
  Terminal,
  Cpu,
  LayoutGrid,
  Package,
  Boxes,
  Server,
  Key,
  BookOpen,
  Code,
  GitBranch,
  Github,
  Send,
  Trophy,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} />,
      skills: [
        {
          name: "JavaScript",
          icon: <FileCode size={24} className="text-yellow-400" />,
        },
        { name: "C++", icon: <Cpu size={24} className="text-blue-500" /> },
        { name: "C", icon: <Terminal size={24} className="text-blue-400" /> },
        { name: "Python", icon: <Code size={24} className="text-green-500" /> },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Layers size={20} />,
      skills: [
        {
          name: "React.js",
          icon: <Braces size={24} className="text-blue-400" />,
        },
        {
          name: "HTML/CSS",
          icon: <Code size={24} className="text-orange-500" />,
        },
        {
          name: "Redux",
          icon: <Package size={24} className="text-purple-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <LayoutGrid size={24} className="text-sky-400" />,
        },
        {
          name: "Bootstrap",
          icon: <Boxes size={24} className="text-purple-600" />,
        },
        {
          name: "Next.js",
          icon: <FilePlus2 size={24} className="text-white" />,
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server size={20} />,
      skills: [
        {
          name: "Node.js",
          icon: <Server size={24} className="text-green-500" />,
        },
        {
          name: "Express.js",
          icon: <Package size={24} className="text-gray-300" />,
        },
        {
          name: "JWT/Auth",
          icon: <Key size={24} className="text-yellow-500" />,
        },
      ],
    },
    {
      title: "Database Technologies",
      icon: <Database size={20} />,
      skills: [
        {
          name: "MongoDB",
          icon: <Database size={24} className="text-green-500" />,
        },
        {
          name: "MySQL",
          icon: <Database size={24} className="text-blue-500" />,
        },
        {
          name: "Supabase",
          icon: <Database size={24} className="text-emerald-500" />,
        },
        {
          name: "Firebase",
          icon: <Database size={24} className="text-amber-500" />,
        },
      ],
    },
    {
      title: "GenAI",
      icon: <Brain size={20} />,
      skills: [
        { name: "LLMs", icon: <Brain size={24} className="text-purple-400" /> },
        {
          name: "Prompt Eng",
          icon: <BookOpen size={24} className="text-blue-300" />,
        },
        {
          name: "AI APIs",
          icon: <Braces size={24} className="text-emerald-400" />,
        },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      skills: [
        {
          name: "VS Code",
          icon: <Code2 size={24} className="text-blue-500" />,
        },
        {
          name: "Git",
          icon: <GitBranch size={24} className="text-orange-500" />,
        },
        {
          name: "GitHub",
          icon: <Github size={24} className="text-gray-300" />,
        },
        {
          name: "Postman",
          icon: <Send size={24} className="text-orange-400" />,
        },
      ],
    },
  ];

  // const tools = [
  //   { name: "React", image: "/react.png" },
  //   { name: "Node.js", image: "/nodejs.png" },
  //   { name: "MongoDB", image: "/mongodb.png" },
  //   { name: "Express", image: "/express.png" },
  //   { name: "Redux", image: "/redux.png" },
  //   { name: "Git", image: "/git.png" },
  //   { name: "Tailwind", image: "/tailwind.png" },
  //   { name: "MySQL", image: "/mysql.png" },
  //   { name: "JavaScript", image: "/java-script.png" },
  //   { name: "VS Code", image: "/vscode.png" },
  //   { name: "Postman", image: "/postman.png" },
  //   { name: "GitHub", image: "/github.png" },
  //   { name: "RESTful API", image: "/api.png" },
  //   { name: "JWT", image: "/jwt.png" },
  //   { name: "Supabase", image: "/supabase.png" },
  //   { name: "TypeScript", image: "/typescript.png" },
  //   { name: "Next.js", image: "/nextjs.png" },
  //   { name: "Firebase", image: "/firebase.png" },
  // ];

  // Updated Skills Section Component

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Certifications data
  const certifications = [
    {
      title: "Postman API Certification",
      issuer: "Postman",
      description:
        "Mastered API development and testing methodologies, with expertise in automating complex API workflows and optimizing integration processes.",
      image: "/postman.jpg",
      highlight: "Top 5% in cohort",
    },
    {
      title: "Cyber Security & Privacy Certification",
      issuer: "NPTEL- IIT Madras",
      description:
        "Comprehensive training in system security, data protection, and privacy compliance. Developed skills in threat assessment and vulnerability management.",
      image: "/cyber.png",
      highlight: "Silver Medal | Top 2%",
    },
    {
      title: "Fundamentals of Object Oriented Programming",
      issuer: "NPTEL - IIT Roorkee",
      description:
        "Earned a silver medal for outstanding performance in the NPTEL course covering core OOP concepts such as inheritance, polymorphism, encapsulation, and abstraction in Java and C++.",
      image: "/oop-nptel.png",
      highlight: "Silver Medal",
    },
    {
      title: "Graph Camp Achiever",
      issuer: "AlgoUniversity",
      description:
        "Completed an intensive graph algorithms bootcamp covering BFS, DFS, Dijkstra, Kruskal, Prim’s, and advanced graph theory concepts with problem-solving using C++ and Python.",
      image: "/algouniversity-graph.png",
      highlight: "Achiever",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <motion.section
        className="pt-24 pb-16 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
              About <span className="text-blue-500">Me</span>
            </h1>

            <div className="flex items-center justify-center mb-8">
              <MapPin className="text-blue-400 mr-2" size={18} />
              <p className="text-gray-300">
                <span className="font-medium">Mumbai, Maharashtra</span> with
                roots in{" "}
                <span className="font-medium">Varanasi, Uttar Pradesh</span>
              </p>
            </div>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Passionate full-stack developer specializing in the{" "}
              <span className="text-blue-400 font-medium">MERN stack</span> with
              a deep understanding of{" "}
              <span className="text-blue-400 font-medium">
                data structures and algorithms
              </span>
              . I build seamless, scalable applications that solve real-world
              problems.
            </p>
          </motion.div>

          {/* Key Highlights Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Technical Expertise
              </h3>
              <p className="text-gray-400">
                Full-stack developer with a strong grasp of both frontend and
                backend technologies, specializing in creating robust,
                user-centric applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Leadership
              </h3>
              <p className="text-gray-400">
                Currently serving as the Treasurer at IET NITK, managing
                finances, budget planning, and resource allocation for club
                initiatives and tech events.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Academic Excellence
              </h3>
              <p className="text-gray-400">
                Strong foundation in computer science with coursework in DSA,
                OS, DBMS, Cyber Security, and emerging technologies like Quantum
                Computing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="mb-10 m-5 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              value: "4+",
              label: "Years Coding",
              icon: <Code className="text-blue-500" size={24} />,
            },
            {
              value: "20+",
              label: "Projects Completed",
              icon: <Briefcase className="text-blue-500" size={24} />,
            },
            {
              value: "10+",
              label: "Technologies",
              icon: <Database className="text-blue-500" size={24} />,
            },
            {
              value: "4",
              label: "Certifications",
              icon: <Award className="text-blue-500" size={24} />,
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gradient-to-br from-gray-900 to-blue-950/40 rounded-xl p-6 border border-gray-800 shadow-lg flex flex-col items-center"
            >
              <div className="mb-3">{stat.icon}</div>
              <motion.p
                className="text-4xl sm:text-5xl font-bold text-blue-500 mb-1"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section with Card-based Layout and Animations */}
      <section className="py-20 bg-gradient-to-b from-black via-black/80 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Technical Skills
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              My expertise spans across multiple technologies and domains, with
              a focus on modern web development and software engineering.
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, translateY: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-5">
                    <motion.div
                      className="bg-blue-500/20 p-3 rounded-lg mr-4 text-blue-400"
                      whileHover={{ rotate: 15 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.05 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center justify-center bg-gray-800/50 rounded-lg p-3 border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="mb-2 flex items-center justify-center">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 text-sm font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Knowledge */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-white">
              Additional Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-blue-950/20 rounded-xl p-6 border border-gray-800 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold flex items-center mb-5 text-white">
                  <BookOpen className="mr-3 text-blue-500" size={22} /> Relevant
                  Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Operating Systems",
                    "Database Management Systems",
                    "Object-Oriented Programming",
                    "Computer Networks",
                    "Cyber Security & Privacy",
                    "Quantum Computing Fundamentals",
                  ].map((course, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      className="bg-blue-500/10 text-blue-300 text-sm py-1.5 px-3 rounded-full border border-blue-500/20"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-blue-950/20 rounded-xl p-6 border border-gray-800 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold flex items-center mb-5 text-white">
                  <Wrench className="mr-3 text-blue-500" size={22} />{" "}
                  Professional Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "GitHub",
                    "MySQL Workbench",
                    "VS Code",
                    "MongoDB Compass",
                    "Postman",
                    "MS Office Suite",
                    "Adobe Premier Pro",
                    "Adobe Photoshop",
                    "LaTeX Overleaf",
                    "Figma",
                    "Docker",
                  ].map((tool, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                      }}
                      className="bg-blue-500/10 text-blue-300 text-sm py-1.5 px-3 rounded-full border border-blue-500/20"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications & Achievements
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gray-900/40 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs py-1 px-3 rounded-full font-medium">
                    {cert.highlight}
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-3">
                    <Award className="text-blue-500 mr-2" size={20} />
                    <h4 className="text-lg font-bold text-white">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-blue-300 text-sm mb-3">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-gray-400">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-10"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to collaborate?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              I'm always looking for exciting projects and opportunities to
              apply my skills and create something amazing.
            </p>
            <button
              className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={() => {
                navigate("/contact");
                window.scrollTo(0, 0);
              }}
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
