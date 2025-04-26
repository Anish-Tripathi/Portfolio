import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  ChevronRight,
  Medal,
  TrendingUp,
} from "lucide-react";
import Club from "./Club";
import Boards from "./Boards";

function Academic() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div style={{ scrollBehavior: "smooth", marginTop: "30px" }}>
      <motion.section
        className="py-20 bg-gradient-to-b from-zinc-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white inline-block relative">
              Academic Excellence
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A journey of continuous learning, achievement, and growth
            </p>
          </motion.div>

          <motion.div
            className="bg-black/80 p-8 rounded-xl shadow-2xl border border-zinc-800"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* University Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 border-b border-zinc-800 pb-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  National Institute of Technology Karnataka, Surathkal
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2">
                  <span className="text-gray-300 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-blue-400" />
                    B.Tech in Electronics and Communication Engineering
                  </span>
                  <span className="text-gray-300 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-1 text-purple-400" />
                    Minor in Computer Science and Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Exam Results Section */}
            <h3 className="text-xl font-bold mb-6 text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
              Competitive Exam Performance
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "JEE Main 2022",
                  rank: "CRL Rank: 4495",
                  score: "Score: 99.52%ile",
                  color: "from-blue-600 to-blue-400",
                },
                {
                  title: "JEE Advanced 2022",
                  rank: "CRL Rank: 6985",
                  color: "from-purple-600 to-purple-400",
                },
                {
                  title: "MHT-CET 2022",
                  rank: "CRL Rank: 12",
                  score: "Score: 99.98%ile",
                  color: "from-indigo-600 to-indigo-400",
                },
              ].map((exam, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900/70 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all"
                  whileHover={{ scale: 1.03, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`h-2 w-20 mb-4 rounded bg-gradient-to-r ${exam.color}`}
                  ></div>
                  <h4 className="font-semibold mb-3 text-white text-lg">
                    {exam.title}
                  </h4>
                  <p className="text-gray-300 font-medium">{exam.rank}</p>
                  {exam.score && (
                    <p className="text-gray-300 font-medium">{exam.score}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Awards and Recognition Section */}
            <div className="border-t border-zinc-800 pt-10 mt-6">
              <h3 className="text-xl font-bold mb-8 flex items-center text-white justify-center">
                <Medal className="w-6 h-6 mr-2 text-yellow-500" /> Awards &
                Recognition
              </h3>

              <motion.div
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-1 rounded-xl overflow-hidden"
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-black p-6 rounded-lg flex flex-col items-center gap-6">
                  {/* Image on top */}
                  <div className="relative w-full flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 blur-sm opacity-50 rounded-lg"></div>
                    <img
                      src="/boards.jpg"
                      alt="Academic Achievement"
                      className="w-96 h-56 rounded-lg object-contain relative z-10"
                    />
                  </div>

                  {/* Content below */}
                  <div className="text-center md:text-left">
                    <h4 className="font-bold mb-3 text-white text-xl flex items-center justify-center md:justify-start">
                      <Award className="w-5 h-5 mr-2 text-yellow-400" />
                      JEE Excellence Award
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Received a prestigious cash prize of{" "}
                      <span className="font-semibold text-blue-400">
                        ₹25,000
                      </span>{" "}
                      from The Science Private's Hub in recognition of
                      outstanding performance in the JEE examination. This award
                      was granted for demonstrating exceptional analytical
                      skills, consistent dedication, and a strong grasp of
                      problem-solving techniques in science and mathematics.
                    </p>
                    <p className="text-gray-400 mt-2">
                      This achievement reflects my commitment to excellence,
                      perseverance, and ability to thrive under pressure in a
                      competitive environment.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <Club />
        <Boards />
      </motion.section>
    </div>
  );
}

export default Academic;
