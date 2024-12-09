import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b002b]/70 to-[#1a001a]/50 backdrop-blur-[2px] z-10" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: 'url("https://i.imgur.com/iV1e34B.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            RECOVER Your Unique Potential
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Through customized rehabilitation, we balance mental, spiritual, physical, and social health to help you shine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mineapp.techintegrationlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 group"
            >
              Try the App
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}