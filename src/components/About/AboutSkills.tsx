import { motion } from "framer-motion";
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
} from "lucide-react";

function AboutSkills() {
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
        {
          name: "TypeScript",
          icon: <FileCode size={24} className="text-blue-600" />,
        },
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
        { name: "OAuth2", icon: <Key size={24} className="text-blue-500" /> },
        {
          name: "FastAPI",
          icon: <Server size={24} className="text-cyan-400" />,
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
        {
          name: "LangChain",
          icon: <Braces size={24} className="text-purple-600" />,
        },
        {
          name: "OpenAI API",
          icon: <Brain size={24} className="text-cyan-400" />,
        },
        { name: "RAG", icon: <Package size={24} className="text-pink-400" /> },
        {
          name: "Pinecone",
          icon: <Database size={24} className="text-indigo-500" />,
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
        {
          name: "MySQL Workbench",
          icon: <Database size={24} className="text-blue-700" />,
        },
      ],
    },
  ];

  return (
    <section className="py-20">
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
            My expertise spans across multiple technologies and domains, with a
            focus on modern web development and software engineering.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, translateY: -5 }}
              className="rounded-xl overflow-hidden border border-gray-700/30 shadow-xl group"
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
                      whileHover={{
                        scale: 1.1,
                        rotateX: [0, 5, -5, 0],
                        rotateY: [0, 360],
                      }}
                      animate={{
                        rotateY: [0, 2, -2, 0],
                        rotateX: [0, 1, -1, 0],
                      }}
                      transition={{
                        delay: skillIdx * 0.05 + idx * 0.1,
                        rotateY: {
                          duration: 8 + Math.random() * 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        rotateX: {
                          duration: 6 + Math.random() * 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        default: { duration: 0.3 },
                      }}
                      className="flex flex-col items-center justify-center rounded-full aspect-square p-4 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg relative overflow-hidden cursor-pointer"
                      style={{
                        boxShadow: `
                          0 8px 32px rgba(0, 0, 0, 0.6),
                          0 4px 16px rgba(59, 130, 246, 0.2),
                          inset -8px -8px 16px rgba(0, 0, 0, 0.4),
                          inset 8px 8px 16px rgba(255, 255, 255, 0.08),
                          inset 2px 2px 8px rgba(255, 255, 255, 0.15)
                        `,
                        transform: "perspective(300px)",
                        transformStyle: "preserve-3d",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full opacity-60" />
                      <div
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{
                          background: `
                            radial-gradient(ellipse 20% 15% at 65% 75%, 
                            rgba(59, 130, 246, 0.6), 
                            transparent 50%)
                          `,
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-full opacity-40"
                        style={{
                          background: `
                            conic-gradient(from 0deg at 50% 50%, 
                            transparent 0deg, 
                            rgba(147, 51, 234, 0.3) 45deg, 
                            rgba(59, 130, 246, 0.4) 90deg,
                            transparent 135deg,
                            rgba(147, 51, 234, 0.2) 225deg,
                            transparent 270deg)
                          `,
                          mask: `
                            radial-gradient(circle at center, 
                            transparent 70%, 
                            black 80%, 
                            black 90%, 
                            transparent 100%)
                          `,
                        }}
                      />
                      <motion.div
                        className="mb-2 flex items-center justify-center relative z-10"
                        animate={{ rotateZ: [0, 1, -1, 0] }}
                        transition={{
                          duration: 4 + Math.random() * 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-200 text-xs font-medium text-center leading-tight relative z-10 drop-shadow-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="rounded-xl p-6 border border-gray-700/30 shadow-md"
              whileHover={{ scale: 1.02 }}
              style={{
                background: `radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1), transparent 50%)`,
              }}
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
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.3,
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(59, 130, 246, 0.3)",
                        "0 0 15px rgba(59, 130, 246, 0.5)",
                        "0 0 5px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    className="text-blue-300 text-sm py-1.5 px-3 rounded-full border border-blue-500/30"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl p-6 border border-gray-700/30 shadow-xl"
              whileHover={{ scale: 1.02 }}
              style={{
                background: `radial-gradient(ellipse at top, rgba(59, 130, 246, 0.1), transparent 50%)`,
              }}
            >
              <h4 className="text-xl font-bold flex items-center mb-5 text-white">
                <Wrench className="mr-3 text-blue-500" size={22} /> Professional
                Tools
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
                    transition={{
                      delay: idx * 0.05,
                      duration: 0.3,
                      boxShadow: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 5px rgba(59, 130, 246, 0.3)",
                        "0 0 15px rgba(59, 130, 246, 0.5)",
                        "0 0 5px rgba(59, 130, 246, 0.3)",
                      ],
                    }}
                    className="text-blue-300 text-sm py-1.5 px-3 rounded-full border border-blue-500/30"
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
  );
}

export default AboutSkills;
