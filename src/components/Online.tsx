
import { motion } from 'framer-motion';
import { Github,Linkedin, Code2, Instagram } from 'lucide-react';


function Online() {
  return (
    <div>
       <motion.section 
        className="py-20 bg-zinc-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Online Presence</h2>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/Anish-Tripathi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-300"
            >
              <Github className="w-8 h-8" />
              
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anish-t-223238270/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-300"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/AnishTripathi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-gray-300"
            >
              <Code2 className="w-8 h-8" />
            </motion.a>
            <motion.a
             href="https://www.instagram.com/yourusername/?__pwa=1"
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.2 }}
             className="text-white hover:text-gray-300 flex items-center space-x-2"
             >
            <Instagram className="w-8 h-8" /> {/* Instagram Icon */}
 
            </motion.a>
          </div>
        </div>
      </motion.section>

      
    </div>
  )
}

export default Online
