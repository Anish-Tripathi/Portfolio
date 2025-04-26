import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Server, Award } from "lucide-react";
import Testimonial from "./Testimonial";

const Career = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const careerStages = [
    {
      stage: "Pipeline Entry",
      title: "Software Engineering Internship",
      company: "TechCore Innovations",
      icon: <Code className="w-6 h-6 text-violet-400" />,
      status: "Completed",
      duration: "Summer 2022",
      description:
        "Initial entry point in the software engineering pipeline, focusing on foundational development skills and infrastructure understanding.",
      technologies: ["Python", "Docker", "CI/CD", "Microservices"],
      color: {
        dot: "bg-violet-500",
        status: "bg-violet-900 text-violet-300",
        highlight: "border-violet-500",
      },
    },
    {
      stage: "Pipeline Advancement",
      title: "Software Development Engineer II",
      company: "CloudNative Systems",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      status: "Current Stage",
      duration: "2022 - Present",
      description:
        "Advanced pipeline stage with increased responsibility in designing scalable distributed systems and optimizing technical infrastructure.",
      technologies: ["Kubernetes", "Golang", "AWS", "Terraform"],
      color: {
        dot: "bg-purple-500",
        status: "bg-purple-900 text-purple-300",
        highlight: "border-purple-500",
      },
    },
    {
      stage: "Pipeline Expansion",
      title: "Senior Software Engineer",
      company: "Future Target",
      icon: <Award className="w-6 h-6 text-fuchsia-400" />,
      status: "Next Milestone",
      duration: "Projected 2025",
      description:
        "Projected advancement to senior engineering role, focusing on architectural design and technical leadership.",
      technologies: [
        "System Design",
        "Machine Learning",
        "Advanced Architectures",
      ],
      color: {
        dot: "bg-fuchsia-500",
        status: "bg-fuchsia-900 text-fuchsia-300",
        highlight: "border-fuchsia-500",
      },
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          {/* Neon Glow Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-1 bg-gray-800/50"></div>

          <div className="space-y-8 relative z-10">
            {careerStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`relative pl-12 md:pl-24 pb-8 group 
                ${
                  index !== careerStages.length - 1
                    ? "border-l border-gray-800/50"
                    : ""
                }`}
              >
                {/* Pipeline Connection Dot with Neon Glow */}
                <div
                  className={`absolute left-0 md:left-12 top-0 w-4 h-4 rounded-full 
                  ${stage.color.dot} 
                  group-hover:scale-150 transition-all 
                  shadow-lg shadow-purple-500/50 animate-pulse`}
                ></div>

                {/* Stage Card with Enhanced Interactivity */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-[#0a0a0a] p-6 rounded-lg border transition-all duration-300 
                  ${
                    activeStage === index
                      ? `${stage.color.highlight} shadow-2xl shadow-purple-500/30`
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                  onClick={() =>
                    setActiveStage(activeStage === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      {stage.icon}
                      <h2 className="text-xl md:text-2xl font-bold tracking-wide">
                        {stage.title}
                      </h2>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                    ${stage.color.status}`}
                    >
                      {stage.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-400 mb-2">
                        Company
                      </h3>
                      <p className="text-lg">{stage.company}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {stage.duration}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-400 mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {stage.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs transition-all hover:bg-purple-800/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activeStage === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-gray-300 overflow-hidden"
                      >
                        <p className="border-l-4 border-purple-500 pl-4">
                          {stage.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
};

export default Career;
