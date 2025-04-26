import { motion } from "framer-motion";
import {
  BookOpen,
  Award,
  Medal,
  Crown,
  Target,
  Lightbulb,
  Gift,
  Sparkles,
} from "lucide-react";

function Boards() {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <div>
      <motion.section
        className="py-20 bg-gradient-to-b from-zinc-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
              Academic Excellence & Achievements
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A record of consistent achievement across academics and
              extracurricular activities
            </p>
          </motion.div>

          {/* Board Results Section */}
          <motion.div
            className="bg-black/80 p-8 rounded-xl shadow-2xl border border-zinc-800 mb-10"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg blur-sm opacity-30"></div>
                <img
                  src="/jee.png"
                  alt="JEE Excellence"
                  className="w-80 h-49 rounded-lg object-cover border-2 border-zinc-700 relative z-10"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
                  Board Results Excellence
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Demonstrating consistent academic performance across board
                  examinations and competitive evaluations, setting the
                  foundation for future achievements.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "12th HSC 2022",
                  details: "College Rank: 2 | Score: 91.50% | PCM: 95.67%",
                  icon: <Award className="w-5 h-5 text-purple-400" />,
                  gradient: "from-purple-500 to-purple-400",
                },
                {
                  title: "10th SCC 2020",
                  details: "School Rank: 1 | Score: 97.20%",
                  icon: <Crown className="w-5 h-5 text-pink-400" />,
                  gradient: "from-pink-500 to-pink-400",
                },
                {
                  title: "Kal Kendra Art Competition 2020",
                  details: "Rank: 1",
                  icon: <Target className="w-5 h-5 text-rose-400" />,
                  gradient: "from-rose-500 to-rose-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-lg border border-zinc-800 hover:border-purple-500/50"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div
                    className={`h-1 w-16 mb-4 rounded bg-gradient-to-r ${item.gradient}`}
                  ></div>
                  <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </h4>
                  <p className="text-gray-300">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular Achievements */}
          <motion.div
            className="bg-black/80 p-8 rounded-xl shadow-2xl border border-zinc-800 mb-10"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Medal className="w-6 h-6 mr-2 text-yellow-400" />
              Extracurricular Achievements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  {
                    text: "Participated in a speech competition and demonstrated exceptional oratory skills.",
                  },
                  {
                    text: "Participated in District Sports Organization Cricket Tournament (an inter-district cricket event).",
                  },
                  {
                    text: "Won 4 medals in various sports events.",
                    highlight: true,
                  },
                  {
                    text: "Secured 2 gold medals in IEO (International English Olympiad).",
                    highlight: true,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      item.highlight
                        ? "bg-gradient-to-r from-purple-950/50 to-zinc-900"
                        : ""
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-full mt-1">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-gray-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    text: "Secured 1 gold and 2 silver medals in IMO (International Mathematics Olympiad).",
                    highlight: true,
                  },
                  {
                    text: "Won 1 silver medal in NSO (National Science Olympiad).",
                    highlight: true,
                  },
                  { text: "Ranked in the Top 15 in the Math Aptitude Exam." },
                  {
                    text: "Secured 2nd rank in the Maharashtra Scholarship Exam and received a cash prize of ₹10,000.",
                    highlight: true,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      item.highlight
                        ? "bg-gradient-to-r from-purple-950/50 to-zinc-900"
                        : ""
                    }`}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-1 rounded-full mt-1">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                    </div>
                    <p className="text-gray-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Exhibition Achievements */}
            <motion.div
              className="bg-black/80 p-6 rounded-xl shadow-lg border border-zinc-800"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg mr-3">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Exhibition Achievements
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Participated in both inter and intra-school exhibitions and won
                the{" "}
                <span className="text-purple-400 font-medium">1st prize</span>{" "}
                for my project on{" "}
                <span className="text-pink-400 font-medium">Aquaponics</span>.
                This project showcased the integration of aquaculture and
                hydroponics, creating a sustainable ecosystem for growing plants
                and fish together. It was presented at the{" "}
                <span className="text-purple-400 font-medium">
                  Inter-School Science Exhibition
                </span>
                , where over 40 schools participated.
              </p>
            </motion.div>

            {/* Leadership Achievements */}
            <motion.div
              className="bg-black/80 p-6 rounded-xl shadow-lg border border-zinc-800"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg mr-3">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Leadership Achievements
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Appointed as the{" "}
                <span className="text-purple-400 font-medium">Head Boy</span> of
                my school, where I demonstrated strong leadership,
                organizational skills, and responsibility in managing school
                events and student affairs.
                <br />
                <br />
                Prior to this, I served as the{" "}
                <span className="text-pink-400 font-medium">Captain</span> of
                the school green house team and won house of the year award,
                leading my team with a focus on discipline, teamwork, and school
                spirit.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Top Ranker Achievement */}
            <motion.div
              className="bg-black/80 p-6 rounded-xl shadow-lg border border-zinc-800"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Top Ranker in Exams
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Ranked among the{" "}
                <span className="text-purple-400 font-medium">Top Rankers</span>{" "}
                in the{" "}
                <span className="text-pink-400 font-medium">
                  Homi Bhabha Bal Vidya
                </span>{" "}
                Exam, showcasing exceptional academic performance and analytical
                skills.
              </p>
            </motion.div>

            {/* Prize Received */}
            <motion.div
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-xl shadow-lg border border-purple-500/30"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-4 justify-center">
                <Gift className="w-6 h-6 mr-2 text-pink-400" />
                <h3 className="text-xl font-bold text-white">
                  Special Recognition
                </h3>
              </div>

              <div className="text-center">
                <p className="text-gray-200 leading-relaxed">
                  Received a{" "}
                  <span className="text-pink-400 font-semibold">₹10,000</span>{" "}
                  cash prize for securing{" "}
                  <span className="text-purple-400 font-semibold">
                    2nd rank
                  </span>{" "}
                  in the Maharashtra Scholarship Exam by the{" "}
                  <span className="text-pink-400 font-semibold">
                    Mira Bhayandar MLA
                  </span>
                  , acknowledging my excellence in academic pursuits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Boards;
