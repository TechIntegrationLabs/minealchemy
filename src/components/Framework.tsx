import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Heart, Activity, Users, Diamond } from 'lucide-react';
import { useState } from 'react';

export default function Framework() {
  const [activeIndex, setActiveIndex] = useState(0);

  const frameworks = [
    {
      title: 'Mental Health',
      Icon: Brain,
      description: 'Custom therapy services including EMDR and innovative approaches like Yoda-talk therapy.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      details: [
        'Personalized therapy sessions',
        'Trauma processing with EMDR',
        'Mindfulness practices',
        'Cognitive behavioral therapy',
        'Stress management techniques'
      ]
    },
    {
      title: 'Spiritual Growth',
      Icon: Heart,
      description: 'Focus on inner development, purpose-finding, and service to others.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      details: [
        'Meditation guidance',
        'Purpose exploration',
        'Value alignment',
        'Community service',
        'Personal development'
      ]
    },
    {
      title: 'Physical Wellness',
      Icon: Activity,
      description: 'Comprehensive physical therapy, nutrition guidance, and outdoor activities.',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      details: [
        'Customized exercise plans',
        'Nutrition counseling',
        'Adventure therapy',
        'Sleep optimization',
        'Physical rehabilitation'
      ]
    },
    {
      title: 'Social Connection',
      Icon: Users,
      description: 'Guided reintegration and building meaningful relationships.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      details: [
        'Group therapy sessions',
        'Family counseling',
        'Social skills development',
        'Community integration',
        'Support network building'
      ]
    },
  ];

  return (
    <section id="framework" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The MINE Diamond Framework</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our holistic approach trains individuals to balance wellness in 4 foundational areas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square">
              {/* Diamond shape background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 transform rotate-45" 
                   style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}>
              </div>
              
              {/* Center diamond */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Diamond className="w-16 h-16 text-indigo-600" />
              </motion.div>
              
              {/* Connecting lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" style={{ transform: 'rotate(45deg)' }}>
                  <line x1="50%" y1="0" x2="50%" y2="100%" 
                        className="stroke-indigo-200" strokeWidth="2" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" 
                        className="stroke-indigo-200" strokeWidth="2" />
                </svg>
              </div>

              {frameworks.map((framework, index) => {
                const Icon = framework.Icon;
                const position = [
                  { top: '0%', left: '50%' },    // Top
                  { top: '50%', left: '100%' },  // Right
                  { top: '100%', left: '50%' }, // Bottom
                  { top: '50%', left: '0%' },   // Left
                ][index];

                return (
                  <motion.div
                    key={framework.title}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                      index === activeIndex ? 'scale-110 z-10' : 'scale-100 opacity-50'
                    }`}
                    style={position}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`${framework.bgColor} ${framework.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <div className={`${frameworks[activeIndex].bgColor} ${frameworks[activeIndex].color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
              {(() => {
                const Icon = frameworks[activeIndex].Icon;
                return <Icon className="w-8 h-8" />;
              })()}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {frameworks[activeIndex].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {frameworks[activeIndex].description}
            </p>
            <ul className="space-y-3">
              {frameworks[activeIndex].details.map((detail, index) => (
                <motion.li
                  key={detail}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-2 h-2 rounded-full ${frameworks[activeIndex].bgColor}`} />
                  <span className="text-gray-700">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}