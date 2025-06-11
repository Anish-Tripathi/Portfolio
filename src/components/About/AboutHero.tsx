import { motion } from "framer-motion";
import { MapPin, Code2, Trophy, GraduationCap } from "lucide-react";

function AboutHero() {
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
            <span className="text-blue-400 font-medium">MERN stack</span> with a
            deep understanding of{" "}
            <span className="text-blue-400 font-medium">
              data structures and algorithms
            </span>
            . I build seamless, scalable applications that solve real-world
            problems.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Leadership
            </h3>
            <p className="text-gray-400">
              Currently serving as the Technical Head at IET NITK, leading
              technical initiatives, managing project teams, and overseeing the
              execution of tech events and workshops.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Academic Excellence
            </h3>
            <p className="text-gray-400">
              Strong foundation in computer science with coursework in DSA, OS,
              DBMS, Cyber Security, and emerging technologies like Quantum
              Computing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutHero;
