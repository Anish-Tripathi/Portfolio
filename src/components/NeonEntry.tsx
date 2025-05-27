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
    // Extended timing with introduction phase
    const phases = [
      { delay: 1000, phase: 1 }, // Welcome text
      { delay: 2500, phase: 2 }, // Name reveal
      { delay: 2500, phase: 3 }, // Subtitle
      { delay: 2500, phase: 4 }, // Introduction
      { delay: 4000, phase: 5 }, // Exit
    ];

    let totalDelay = 0;
    phases.forEach(({ delay, phase }) => {
      totalDelay += delay;
      setTimeout(() => setAnimationPhase(phase), totalDelay);
    });

    // Navigate to home and complete animation
    setTimeout(() => {
      navigate("/home");
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, totalDelay + 500);
  }, [navigate, onAnimationComplete]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-black to-black" />

      {/* Minimal grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Phase 1: Welcome */}
      <AnimatePresence>
        {animationPhase === 1 && (
          <motion.div
            className="absolute flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-light text-blue-300 tracking-[0.3em]"
              initial={{ letterSpacing: "0.8em", opacity: 0 }}
              animate={{ letterSpacing: "0.3em", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              HELLO
            </motion.h1>
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-8"
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 2: Name */}
      <AnimatePresence>
        {animationPhase === 2 && (
          <motion.div
            className="absolute flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg md:text-xl text-blue-200/80 font-light tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'M
            </motion.p>

            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
            >
              Anish Tripathi
            </motion.h1>

            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "300px" }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 3: Subtitle */}
      <AnimatePresence>
        {animationPhase === 3 && (
          <motion.div
            className="absolute flex flex-col items-center text-center max-w-4xl px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Anish Tripathi
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-blue-200 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full-Stack Developer & Creative Problem Solver
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 4: Introduction */}
      <AnimatePresence>
        {animationPhase === 4 && (
          <motion.div
            className="absolute flex flex-col items-center text-center max-w-5xl px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Anish Tripathi
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-200 font-light mb-8 leading-relaxed"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Full-Stack Developer & Creative Problem Solver
            </motion.p>

            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Passionate about blending creativity with technology to build
                innovative, scalable full-stack applications focused on modern
                web technologies and exceptional user experiences.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex items-center mt-12 text-blue-300/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <span className="text-sm tracking-wide mr-4">
                ENTERING PORTFOLIO
              </span>
              <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-blue-400"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle ambient particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-blue-400/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
