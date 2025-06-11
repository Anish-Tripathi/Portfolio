import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AboutCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to collaborate?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            I'm always looking for exciting projects and opportunities to apply
            my skills and create something amazing.
          </p>
          <button
            className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;
