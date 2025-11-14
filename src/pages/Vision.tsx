import { motion } from 'motion/react';
import { Target, Globe, Lightbulb, Users, Award, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Vision() {
  const goals2030 = [
    { number: '10,000+', label: 'Professionals Trained', icon: Users },
    { number: '500+', label: 'Enterprise Clients', icon: Award },
    { number: '50+', label: 'Cities Covered', icon: Globe },
    { number: '100+', label: 'Custom Drones Built', icon: Rocket },
  ];

  const coreValues = [
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building a strong community of drone enthusiasts and professionals',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards in education and service',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of what\'s possible with drones',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694874025741-3b8f85df8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3NjMwNTAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drone in sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl mb-6">Our Vision</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Shaping the future of aerial technology
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <Target className="w-12 h-12 text-blue-600" />
                <h2 className="text-4xl">Our Mission</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-6">
                To democratize drone technology, making it accessible, beneficial, and safe through education, innovative services, and manufacturing.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-4">
                We believe that drone technology has the power to transform industries, empower individuals, and create a better future for all. Our mission drives us to break down barriers and make this technology available to everyone.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600">
                Through comprehensive training programs, professional services, and custom manufacturing, we're building a foundation for the widespread adoption of drone technology across India and beyond.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729980262766-61afa60a0f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzYzMDI0NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Agriculture drone"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl">Global Impact</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 max-w-3xl mx-auto">
              How drone innovation can transform agriculture, security, logistics, and environmental monitoring across the world
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Agriculture',
                description: 'Precision farming, crop monitoring, and automated spraying to increase yields and reduce waste',
                color: 'from-green-400 to-green-600',
              },
              {
                title: 'Security',
                description: 'Advanced surveillance systems for public safety, border protection, and emergency response',
                color: 'from-blue-400 to-blue-600',
              },
              {
                title: 'Logistics',
                description: 'Fast, efficient delivery systems for medical supplies, e-commerce, and remote areas',
                color: 'from-purple-400 to-purple-600',
              },
              {
                title: 'Environment',
                description: 'Monitoring wildlife, tracking deforestation, and assessing climate change impacts',
                color: 'from-teal-400 to-teal-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} mb-4`} />
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1577976655502-85300c5ca2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRlY2hub2xvZ3klMjBzZW5zb3JzfGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Smart technology"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-12 h-12 text-yellow-500" />
                <h2 className="text-4xl">Innovation</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-6">
                Pushing boundaries and preparing for tomorrow's challenges
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-4">
                At Flydronics, innovation isn't just a buzzword—it's our driving force. We continuously explore new technologies, develop cutting-edge solutions, and challenge conventional thinking to advance the drone industry.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600">
                From AI-powered autonomous systems to advanced sensor integration, we're committed to staying at the forefront of aerial technology and preparing for the challenges and opportunities of tomorrow.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals 2030 Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Our Goals for 2030
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-100">
              Ambitious targets driving our future growth
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {goals2030.map((goal, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl"
              >
                <goal.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-4xl mb-2">{goal.number}</div>
                <div className="text-gray-100">{goal.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Core Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
              >
                <value.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
