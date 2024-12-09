import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About MINE</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Like mining for precious stones, we believe every person has hidden strengths waiting to be discovered.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80"
              alt="Our Team"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              We believe in a holistic approach to rehabilitation, addressing the mental, spiritual, physical, and social aspects of recovery. Our team of experienced professionals is committed to providing personalized care that evolves with your journey.
            </p>
            <p className="text-gray-600">
              Through innovative therapies, supportive community, and evidence-based practices, we help you rediscover your strength and purpose. Your transformation is our commitment.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}