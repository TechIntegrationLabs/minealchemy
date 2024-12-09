import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Customization() {
  return (
    <section id="customize" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-2xl transform -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Customization"
                className="relative rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-600 font-medium">Personalized Care</span>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Your Journey, Your Way
            </h2>

            <p className="text-xl text-gray-600">
              We understand that every individual's path to recovery is unique.
              That's why we create customized rehabilitation programs that adapt
              to your specific needs, goals, and circumstances.
            </p>

            <div className="space-y-4">
              {[
                'Initial comprehensive assessment',
                'Flexible therapy scheduling',
                'Progress tracking',
                'Program adjustment',
                'Intrapersonal Step-Work',
                'Personalized wellness activities',
                'Custom support network integration',
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}