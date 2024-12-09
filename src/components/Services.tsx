import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Brain, Mountain, Users, Compass, Heart } from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Brain,
      title: 'Yoda-talk Therapy',
      description: 'Unique therapeutic approach combining wisdom and mindfulness.',
    },
    {
      icon: Sparkles,
      title: 'EMDR Therapy',
      description: 'Advanced trauma processing and healing techniques.',
    },
    {
      icon: Mountain,
      title: 'Adventure Therapy',
      description: 'Outdoor experiences promoting growth and self-discovery.',
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Collaborative healing in a supportive community.',
    },
    {
      icon: Compass,
      title: 'Life Navigation',
      description: 'Guided purpose-finding and future planning.',
    },
    {
      icon: Heart,
      title: 'Spiritual Growth',
      description: 'Development of inner strength and personal values.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive rehabilitation services tailored to your unique journey
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 cursor-pointer"
            >
              <motion.div 
                className="flex items-center mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </motion.div>
              <p className="text-gray-600">{service.description}</p>

              {/* Hover effect line */}
              <motion.div
                className="h-0.5 bg-indigo-600 mt-4"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}