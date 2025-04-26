import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const NeonEntry = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Enhanced timing sequence with smoother transitions
    const timing = [
      200, // Initial delay
      2000, // Time for initial greeting to appear
      2000, // Time for name reveal
      2000, // Time for subtitle to appear
      2000, // Time for tags to appear
      2000, // Time for additional content
      3000, // Time to view complete screen before transition
    ];

    let totalDelay = 0;

    // Schedule each phase of the animation
    for (let i = 1; i <= timing.length; i++) {
      totalDelay += timing[i - 1];
      setTimeout(() => setAnimationPhase(i), totalDelay);
    }

    // Auto-transition to home page after all phases
    const totalAnimationTime =
      timing.reduce((sum, time) => sum + time, 0) + 500;
    setTimeout(() => {
      navigate("/home");
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, totalAnimationTime);
  }, [navigate, onAnimationComplete]);

  // Skills to display
  const skills = [
    "React",
    "Node.js",
    "TypeScript",
    "UI/UX",
    "Full-Stack",
    "Problem-Solving",
  ];

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-500/10 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() * 0.3 }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Initial greeting - Phase 1-2 */}
      <AnimatePresence>
        {animationPhase >= 1 && animationPhase < 3 && (
          <motion.div
            className="absolute flex flex-col items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -80, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-4xl md:text-6xl text-blue-300 font-light tracking-wider"
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.15em", opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              WELCOME
            </motion.div>
            <motion.div
              className="h-0.5 w-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4"
              animate={{ width: "240px" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content container - Phase 3+ */}
      <AnimatePresence>
        {animationPhase >= 3 && (
          <motion.div
            className="absolute flex flex-col items-center text-center z-20 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Hi, I am Anish Tripathi */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, type: "spring" }}
            >
              <motion.h2
                className="text-xl md:text-2xl font-light text-blue-200 tracking-widest mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                HI, I AM
              </motion.h2>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-white relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="relative">
                  Anish Tripathi
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 mb-4"
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                  />
                </span>
              </motion.h1>
            </motion.div>

            {/* Introduction - Phase 4+ */}
            {animationPhase >= 4 && (
              <motion.div
                className="max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.p
                  className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  A passionate developer who bridges creativity and innovation
                  to solve real-world problems.
                </motion.p>
              </motion.div>
            )}

            {/* Skills tags - Phase 5+ */}
            {animationPhase >= 5 && (
              <motion.div
                className="flex flex-wrap justify-center gap-3 mt-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-1.5 rounded-full text-sm bg-blue-900/30 text-blue-200 border border-blue-500/40 backdrop-blur-sm shadow-lg shadow-blue-900/10"
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Additional content - Phase 6+ */}
            {animationPhase >= 6 && (
              <>
                <motion.div
                  className="flex flex-col md:flex-row gap-6 mt-4 max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {[
                    {
                      title: "Projects",
                      description:
                        "Discover my portfolio of work spanning web applications, mobile apps, and digital experiences.",
                    },
                    {
                      title: "Experience",
                      description:
                        "Over 5 years of expertise in creating innovative solutions for complex problems.",
                    },
                    {
                      title: "Contact",
                      description:
                        "Interested in collaboration? Let's connect and explore possibilities together.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="py-4 px-6 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-900/10 border border-blue-500/20 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.2 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                        borderColor: "rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <h3 className="text-lg font-medium text-blue-300 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Entrance loader */}
                <motion.div
                  className="mt-12 flex justify-center items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <p className="text-sm text-gray-500 mr-2">Entering</p>
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="h-2 w-2 rounded-full bg-blue-400"
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Central glow effect */}
        <motion.div
          className="absolute inset-0 opacity-20 bg-gradient-radial from-blue-900/20 to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundSize: "120% 120%",
            backgroundPosition: "center center",
            filter: "blur(40px)",
          }}
        />

        {/* Animated particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Top and bottom gradient lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
};
