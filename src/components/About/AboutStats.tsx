import { motion } from "framer-motion";
import { Code, Briefcase, Database, Award } from "lucide-react";

function AboutStats() {
  return (
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
            value: "1.5+",
            label: "Years Coding",
            icon: <Code className="text-blue-500" size={24} />,
          },
          {
            value: "20+",
            label: "Projects Completed",
            icon: <Briefcase className="text-blue-500" size={24} />,
          },
          {
            value: "20+",
            label: "Technologies",
            icon: <Database className="text-blue-500" size={24} />,
          },
          {
            value: "10+",
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
            className="rounded-2xl p-6 border border-gray-800 shadow-lg flex flex-col items-center"
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
  );
}

export default AboutStats;
