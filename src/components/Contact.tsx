import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Code2,
  Instagram,
  Send,
  MessageCircle,
  Users,
} from "lucide-react";
import { useState } from "react";
import * as React from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Replace the existing handleSubmit function with this:
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Simulate form submission with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log the form data to console (for development purposes)
      console.log("Form submitted:", formData);

      // Instead of sending to an API, you could:
      // 1. Use a service like emailjs or formspree
      // 2. Store submissions in local storage
      // 3. Just show a success message for now

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(null), 3000);
    } catch (error) {
      console.error("Error processing form:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="" style={{ marginTop: "50px" }}>
      {/* Hero Section */}
      <motion.div
        className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </motion.p>
        </div>
      </motion.div>

      {/* Contact Info Section */}
      <motion.section
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-white"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Message Me</h3>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="mailto:tripathiarun780@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p>tripathiarun780@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:9867469877"
                  className="flex items-center gap-4 text-white/80 hover:text-white group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Phone</p>
                    <p>+91 9867469877</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-xl"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Connect With Me
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/Anish-Tripathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Github className="w-6 h-6" />
                  <span className="text-sm">GitHub</span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/anish-t-223238270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-sm">LinkedIn</span>
                </motion.a>

                <motion.a
                  href="https://leetcode.com/u/AnishTripathi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Code2 className="w-6 h-6" />
                  <span className="text-sm">LeetCode</span>
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/yourusername/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all"
                  whileHover={{ y: -5, scale: 1.03 }}
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-sm">Instagram</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Send Me a Message
          </motion.h2>

          <motion.p
            className="text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have a question or want to work together? Drop me a message and I'll
            get back to you as soon as possible.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-white/5 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/30"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div className="relative">
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-white/5 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/30"
                required
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            <div className="relative">
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-white/5 text-white rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/30"
                required
                whileFocus={{ scale: 1.01 }}
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              className={`w-full px-6 py-4 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                formStatus === "sending"
                  ? "bg-gray-500"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? (
                <>Sending Message...</>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {formStatus === "success" && (
              <motion.div
                className="text-green-400 text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Your message has been sent successfully! Thank You
              </motion.div>
            )}

            {formStatus === "error" && (
              <motion.div
                className="text-red-400 text-center p-3 rounded-lg bg-red-500/10 border border-red-500/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                There was an error sending your message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.section>

      {/* Bottom CTA Section */}
      <motion.section
        className="py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start a Project?
          </motion.h2>

          <motion.p
            className="text-lg text-white/70 mb-10 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's transform your idea into reality with collaborative
            development and innovative solutions.
          </motion.p>

          <motion.a
            href="https://wa.me/919867469877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start a Conversation <MessageCircle className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
