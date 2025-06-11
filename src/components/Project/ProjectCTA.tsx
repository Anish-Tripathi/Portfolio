import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectCTA() {
  return (
    <motion.section
      className="py-16"
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
  );
}

export default ProjectCTA;
