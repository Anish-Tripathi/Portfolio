import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
import { Download, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";

function Hero() {
  const typedRef = useRef(null);
  const lottieRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationData, setAnimationData] = useState(null);

  // Load animation data
  useEffect(() => {
    fetch("/animations/profileAnimation.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

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

  // Toggle between image and animation automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimation((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 md:px-8 pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-96 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

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
        className="relative max-w-7xl mx-auto py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hexagonal layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-white space-y-8 z-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
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
            className="flex-1 flex justify-center relative"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -z-10 w-110 h-110 lg:w-[550px] lg:h-[550px]">
              {/* Decorative hexagonal background */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="hexGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
                  fill="url(#hexGradient)"
                  stroke="url(#hexGradient)"
                  strokeWidth="0.5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* The profile container with animation and image */}
            <motion.div
              className="relative w-75 h-75 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing border that pulses */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm"
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
                {/* Image and Animation Container */}
                <div className="w-full h-full relative">
                  <AnimatePresence mode="wait">
                    {!showAnimation ? (
                      <motion.div
                        key="image"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        <img
                          src="/profile.jpg"
                          alt="Anish Tripathi"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="animation"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                      >
                        {animationData && (
                          <Lottie
                            lottieRef={lottieRef}
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>

                {/* Toggle indicator dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      !showAnimation ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  ></div>
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      showAnimation ? "bg-white scale-125" : "bg-white/50"
                    }`}
                  ></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Add keyframes for floating particles */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Hero;
