import { motion } from "framer-motion";
import { useState } from "react";
import WebDevelopmentProjects from "./WebDevelopmentProjects";
import RoboticProjects from "./RoboticProjects";
import ResearchProjects from "./ResearchProjects";

function ProjectList() {
  const [, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <WebDevelopmentProjects setHoveredIndex={setHoveredIndex} />
        <RoboticProjects setHoveredIndex={setHoveredIndex} />
        <ResearchProjects setHoveredIndex={setHoveredIndex} />
      </div>
    </motion.section>
  );
}

export default ProjectList;
