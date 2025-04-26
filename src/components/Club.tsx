import { motion } from "framer-motion";
import {
  Users,
  Award,
  Code,
  Cpu,
  BarChart,
  Zap,
  Trophy,
  Star,
} from "lucide-react";

function Club() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.section
        className="py-20 bg-gradient-to-b from-black to-zinc-900"
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
              Technical Club: IET NITK
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Leadership, innovation, and technical excellence
            </p>
          </motion.div>

          {/* Club Overview */}
          <motion.div
            className="bg-black/80 p-8 rounded-xl shadow-2xl border border-zinc-800 mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Image on top */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-md opacity-30"></div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-1 rounded-full relative">
                  <img
                    src="https://th.bing.com/th/id/OIP.Bsii0lqQnu0rzkejwK5oXgHaHa?rs=1&pid=ImgDetMain"
                    alt="IET NITK"
                    className="w-50 h-24 object-cover border-2 border-blue-400 rounded-full"
                  />
                </div>
              </div>

              {/* Content below */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Institute of Engineering and Technology
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Proudly serving in IET NITK, I have contributed in various
                  leadership roles, successfully coordinated and participated in
                  events, and led a team in multiple projects. My contributions
                  reflect my passion for technology and leadership.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline of Involvement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Roles */}
            <motion.div
              className="col-span-1"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-black/80 p-6 rounded-xl shadow-lg border border-zinc-800 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Roles & Positions
                  </h3>
                </div>

                <div className="space-y-4">
                  <motion.div
                    className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 rounded-lg border-l-4 border-blue-500"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      Treasurer (Current)
                    </h4>
                    <p className="text-gray-300">
                      Managing financial operations and event budgeting for IET,
                      ensuring smooth execution of club activities.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 rounded-lg border-l-4 border-cyan-500"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Award className="w-4 h-4 mr-2 text-cyan-400" />
                      Executive Member
                    </h4>
                    <p className="text-gray-300">
                      Contributed to the successful planning and execution of
                      club initiatives, actively collaborating with team members
                      and seniors.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Events & Contributions */}
            <motion.div
              className="col-span-1 md:col-span-2"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-black/80 p-6 rounded-xl shadow-lg border border-zinc-800">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Events & Initiatives
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 rounded-lg border border-zinc-700 hover:border-blue-500/50"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-blue-400" />
                      CircuitXscape
                    </h4>
                    <p className="text-gray-300">
                      Organized and successfully executed the CircuitXscape
                      event, focused on hands-on learning and innovation in
                      circuit designing.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 rounded-lg border border-zinc-700 hover:border-cyan-500/50"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Code className="w-4 h-4 mr-2 text-cyan-400" />
                      Coding Events
                    </h4>
                    <p className="text-gray-300">
                      Coordinated 3 major coding events, where I led a team of
                      30 members, liaised with seniors and organizers, and
                      managed over 150 participants.
                    </p>
                  </motion.div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                        <BarChart className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Project Coordination
                      </h3>
                    </div>

                    <motion.div
                      className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 rounded-lg border border-zinc-700"
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="text-gray-300 leading-relaxed">
                        Participated in two Project Expos, collaborating on
                        projects and showcasing innovation. Currently serving as
                        the{" "}
                        <span className="text-cyan-400 font-medium">
                          Project Coordinator
                        </span>{" "}
                        for 12 ongoing projects, conducting regular review
                        meetings, and assisting mentors to ensure timely
                        completion.
                      </p>
                    </motion.div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Robowar - Team Techbolt
                      </h3>
                    </div>

                    <motion.div
                      className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 rounded-lg border border-zinc-700"
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="text-gray-300 leading-relaxed">
                        Led Team Techbolt in Robowar, where we designed and
                        built fighting bots{" "}
                        <span className="text-blue-400 font-medium">
                          "Chetak 1.0"
                        </span>{" "}
                        and{" "}
                        <span className="text-cyan-400 font-medium">
                          "Chetak 2.0"
                        </span>
                        . As the Technical and Managerial Head, I led a team of
                        20 members, overseeing both hardware design and
                        managerial aspects.
                      </p>
                    </motion.div>
                  </div>

                  <div>
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg mr-3">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        Additional Contributions
                      </h3>
                    </div>

                    <motion.div
                      className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-5 rounded-lg border border-zinc-700"
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="text-gray-300 leading-relaxed">
                        Conducted KEP (Knowledge Enhancement Program) and
                        contests for juniors, fostering a spirit of learning and
                        competition. Participated and won multiple coding events
                        organized by different clubs, showcasing my technical
                        proficiency and competitive spirit.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Club;
