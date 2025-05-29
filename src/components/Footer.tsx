import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Anish Tripathi
                </h3>
                <p className="text-blue-400 text-sm">Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Passionate about creating innovative solutions that bridge
              creativity and technology. Let's build something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Anish-Tripathi",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/anish-t-223238270/",
                  label: "LinkedIn",
                },
                {
                  icon: Code,
                  href: "https://leetcode.com/AnishTripathi/",
                  label: "LeetCode",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative p-3 bg-zinc-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Academic", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <p className="text-gray-300 text-sm">
              Discover my latest projects and what I've been building.
            </p>

            <div>
              <div>
                <Link
                  to="/projects"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:scale-105 transition-transform"
                >
                  Explore My Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                text: "tripathiarun780@gmail.com",
                href: "mailto:tripathiarun780@gmail.com",
              },
              {
                icon: Phone,
                text: "+91 9867469877",
                href: "tel:+919867469877",
              },
              { icon: MapPin, text: "NITK Surathkal, Karnataka", href: "#" },
            ].map(({ icon: Icon, text, href }) => (
              <a
                key={text}
                href={href}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-zinc-800 group-hover:bg-blue-600 rounded-lg transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm">{text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <span>© {currentYear} Anish Tripathi</span>.
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
