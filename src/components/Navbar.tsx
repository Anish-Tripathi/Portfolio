import { Link, NavLink } from "react-router-dom";
import { Github, Linkedin, Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    "Home",
    "About",
    "Academic",
    "Projects",
    // "Career",
    // "Services",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? " backdrop-blur-md py-2 shadow-lg shadow-blue-500/10"
          : "  py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group" aria-label="Go to home">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-all duration-500 w-11 h-11"></div>
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/Avatar.png"
              alt="Anish Tripathi"
              className="w-11 h-11 rounded-full object-cover border-1 border-blue-400 shadow-md shadow-blue-500/50 transition-all duration-300 transform z-10"
            />
          </motion.div>
        </Link>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({}) =>
                `text-white relative text-md px-2 py-1 overflow-hidden group transition-colors`
              }
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10 font-medium text-md  tracking-wider bolder">
                    {item}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  )}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded"></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Social Links */}
        <div className="ml-4hidden md:flex items-center gap-3">
          <motion.a
            href="https://www.linkedin.com/in/anish-t-223238270/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Visit Linkedin"
            whileHover={{ y: -2, scale: 1.1 }}
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/Anish-Tripathi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Visit Github"
            whileHover={{ y: -2, scale: 1.1 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://leetcode.com/AnishTripathi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
            aria-label="Visit Leetcode"
            whileHover={{ y: -2, scale: 1.1 }}
          >
            <Code2 size={18} />
          </motion.a>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle navigation menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black to-gray-900 backdrop-blur-lg shadow-lg shadow-blue-900/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block w-full p-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-white font-medium"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                className="flex items-center justify-center gap-6 pt-4 border-t border-white/10 mt-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.1 }}
              >
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                  aria-label="Visit Linkedin"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Anish-Tripathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                  aria-label="Visit Github"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://leetcode.com/AnishTripathi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300"
                  aria-label="Visit Leetcode"
                >
                  <Code2 size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
