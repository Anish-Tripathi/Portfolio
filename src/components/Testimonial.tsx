import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "CTO, CloudNative Systems",
      quote:
        "An exceptional engineer who consistently demonstrates innovative problem-solving and a deep understanding of distributed systems architecture.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Marcus Chen",
      role: "Senior Engineering Manager",
      quote:
        "Remarkable technical growth and leadership potential. Brings not just technical skills, but a strategic approach to solving complex engineering challenges.",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Thompson",
      role: "Product Director",
      quote:
        "A true technical innovator who bridges the gap between cutting-edge technology and practical business solutions.",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < count ? "text-yellow-400" : "text-gray-600"
        }`}
        fill={index < count ? "#facc15" : "none"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Neon Glow Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl font-bold text-center mb-12 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-600">
            Professional Testimonials
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`bg-[#0a0a0a] border rounded-lg p-6 transition-all duration-300 
                  ${
                    activeTestimonial === index
                      ? "border-purple-500 shadow-2xl shadow-purple-500/30"
                      : "border-gray-800 hover:border-gray-700"
                  }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
                    />
                    <Quote className="absolute -top-2 -right-2 w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <AnimatePresence>
                  {activeTestimonial === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-300 border-l-4 border-purple-500 pl-4"
                    >
                      {testimonial.quote}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
