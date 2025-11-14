import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cpu, Cloud, Smartphone, Layers, Search, Pen, TestTube, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
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

export function TechDetails() {
  const architectureLayers = [
    {
      icon: Cpu,
      title: 'Physical Layer',
      description: 'Textile sensors embedded in garments',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Smartphone,
      title: 'Device Layer',
      description: 'Wearable devices and data collection',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Layer',
      description: 'Data processing and AI analytics',
      color: 'from-indigo-400 to-indigo-600',
    },
    {
      icon: Layers,
      title: 'Application Layer',
      description: 'User interfaces and actionable insights',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  const technicalApproach = [
    {
      icon: Search,
      title: 'Discovery',
      description: 'Conducting comprehensive research and gathering detailed requirements to understand project scope and objectives.',
    },
    {
      icon: Pen,
      title: 'Design & Prototyping',
      description: 'Creating early designs and prototypes for testing, validation, and stakeholder feedback.',
    },
    {
      icon: TestTube,
      title: 'Development & Testing',
      description: 'Building and validating components for performance, reliability, and compliance with industry standards.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577976655502-85300c5ca2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRlY2hub2xvZ3klMjBzZW5zb3JzfGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Smart technology"
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
          <h1 className="text-5xl md:text-6xl mb-6">Technical Details</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            A deep dive into our drone technology systems
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
              Smart Drone Sensor Technology
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700">
              Our three-tier system architecture seamlessly connects sensors, devices, cloud services, and user applications to deliver real-time aerial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              System Architecture
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Three-tier architecture connecting sensors to insights
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{layer.title}</h3>
                  <p className="text-gray-600">{layer.description}</p>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Platform Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Platform Data Flow
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              From physical sensors to actionable insights
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-8">
                {[
                  { step: 1, title: 'Sensor Data Collection', desc: 'Physical textile sensors capture environmental data' },
                  { step: 2, title: 'Device Processing', desc: 'Wearable devices aggregate and preprocess sensor data' },
                  { step: 3, title: 'Cloud Analytics', desc: 'AI algorithms analyze data and generate insights' },
                  { step: 4, title: 'User Application', desc: 'Insights delivered to users through intuitive interfaces' },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Our Technical Approach
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Systematic methodology for drone technology development
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {technicalApproach.map((approach, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <approach.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
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
                src="https://images.unsplash.com/photo-1752937417731-6936a72270e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MzAzMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone technology"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
                Technology Stack
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-8">
                Cutting-edge technologies powering our drone systems
              </motion.p>
              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  { category: 'Hardware', tech: 'Advanced sensors, flight controllers, GPS systems' },
                  { category: 'Software', tech: 'AI/ML algorithms, autonomous navigation, real-time processing' },
                  { category: 'Communication', tech: '5G connectivity, satellite links, mesh networking' },
                  { category: 'Security', tech: 'Encrypted data transmission, secure authentication' },
                  { category: 'Analytics', tech: 'Computer vision, predictive modeling, data visualization' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg"
                  >
                    <div className="text-sm text-blue-600 mb-1">{item.category}</div>
                    <div className="text-gray-700">{item.tech}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
              Explore Our Development Process
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-gray-100">
              Learn how we transform ideas into reality through our structured development methodology
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/development-process">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  View Development Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
