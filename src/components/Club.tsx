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
  Globe,
  BookOpen,
  Heart,
} from "lucide-react";

function Club() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.section
        className="py-20 "
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
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full  opacity-30"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                    className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 rounded-lg border-l-4 border-purple-500"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-purple-400" />
                      Technical Head (Current)
                    </h4>
                    <p className="text-gray-300">
                      Leading technical initiatives and mentoring teams in
                      innovative projects, overseeing technical execution of
                      club events and workshops.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-5 rounded-lg border-l-4 border-blue-500"
                    whileHover={{ x: 5 }}
                  >
                    <h4 className="text-lg font-semibold mb-2 text-white flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-400" />
                      Treasurer
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

          {/* Other Campus Contributions - Separate Section */}
          <motion.div
            className="bg-gradient-to-br from-zinc-900/50 to-black/80 p-8 rounded-xl shadow-2xl border border-zinc-700 "
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Other Campus Contributions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-lg border border-purple-500/30"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="w-5 h-5 mr-3 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Media Coordinator
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Served as Media Coordinator for{" "}
                  <span className="text-purple-400 font-medium">Incident</span>{" "}
                  and{" "}
                  <span className="text-pink-400 font-medium">Engineer</span>{" "}
                  magazines, enhancing campus outreach and engaging the student
                  community through strategic content distribution and social
                  media management.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-lg border border-green-500/30"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Code className="w-5 h-5 mr-3 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Web Development
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Developed comprehensive websites for{" "}
                  <span className="text-green-400 font-medium">SMILE</span> and{" "}
                  <span className="text-teal-400 font-medium">Yoga Club</span>,
                  implementing modern design principles and user-friendly
                  interfaces that increased online engagement by{" "}
                  <span className="text-yellow-400 font-bold">50%</span>.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 p-6 rounded-lg border border-indigo-500/30"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 mr-3 text-indigo-400" />
                <h3 className="text-xl font-semibold text-white">
                  Community Impact
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Through these diverse roles across different campus
                organizations, I've contributed to building a more connected and
                digitally-enabled campus community, bridging the gap between
                technology and student engagement.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Club;
