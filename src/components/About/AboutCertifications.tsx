import { motion } from "framer-motion";
import { Award } from "lucide-react";

function AboutCertifications() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16">
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
              className="rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 flex flex-col h-full"
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
                  <h4 className="text-lg font-bold text-white">{cert.title}</h4>
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
  );
}

export default AboutCertifications;
