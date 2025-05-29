import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { Download, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  const typedRef = useRef(null);

  // Load animation data

  // Initialize typed.js
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "Competitive Programmer",
        "Video Editor",
        "Photoshop Expert",
        "Project Manager",
        "Tech Enthusiast",
        "Creative Coder",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen  px-4 md:px-8 pt-16 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          ></div>
        ))}
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-white space-y-8 z-10 ml-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-medium"
              >
                Welcome to my portfolio
              </motion.div>
              <h1 className="text-5xl py-3 md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Anish Tripathi
              </h1>
            </div>

            <h2 className="text-2xl md:text-3xl text-gray-300">
              I'm a{" "}
              <span
                ref={typedRef}
                className="text-blue-400 font-semibold"
              ></span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              A passionate developer who bridges creativity and innovation to
              solve real-world problems. With expertise in full-stack
              development, competitive programming, and project management, I
              aim to make an impact through technology.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="https://drive.google.com/file/d/1PeTMNcyJ57_0mVCmxC7-8oOAcKViehOb/view?usp=sharing"
                target="_blank"
                className="py-3 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg transition duration-200 inline-flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(79, 70, 229, 0.6)",
                }}
                transition={{ duration: 0.3 }}
              >
                <span>Download Resume</span>
                <Download className="w-6 h-6" />
              </motion.a>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.a
                  href="https://github.com/Anish-Tripathi"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub className="text-white text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/feed/"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin className="text-white text-xl" />
                </motion.a>
                <motion.a
                  href="https://leetcode.com/AnishTripathi/"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20"
                  whileHover={{ y: -3 }}
                >
                  <Code2 className="text-white text-xl" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Animated Profile with Hexagonal Design */}
          <motion.div
            className="flex-1 flex justify-center relative ml-12"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative w-65 h-65 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing border that pulses */}
              <motion.div
                className="absolute -inset-1  rounded-full "
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              ></motion.div>

              <div className="relative h-full w-full rounded-full overflow-hidden">
                {/* Video Container */}
                <div className="w-full h-full relative">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <video
                      src="/animations/earth-animation.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Video failed to load:", e);
                        // Type assertion for the video element
                        const videoElement = e.target as HTMLVideoElement;
                        // Fallback to a placeholder or alternative video
                        videoElement.src = "/animations/fallback.mp4";
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
