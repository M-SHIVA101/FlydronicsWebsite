import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
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

export function DevelopmentProcess() {
  const textilePhases = [
    {
      title: 'Textile Sensor Design',
      description: 'Analyzing industry requirements, selecting materials, prototyping sensors, and initial calibration',
    },
    {
      title: 'Garment Integration',
      description: 'Ensuring ergonomic placement, non-intrusive integration, durability testing, and user comfort validation',
    },
    {
      title: 'AI & Data Analytics',
      description: 'Developing algorithms, training models, implementing real-time analytics, and delivering insights',
    },
    {
      title: 'Production & Certification',
      description: 'Manufacturing, quality assurance, and completing required certifications',
    },
    {
      title: 'Deployment & Support',
      description: 'Onboarding users, monitoring performance, and improving the system continuously',
    },
  ];

  const developmentStages = [
    {
      title: 'Discovery & Requirements',
      description: 'Understanding project needs and defining clear objectives',
    },
    {
      title: 'Concept & Design',
      description: 'Creating initial designs and architectural plans',
    },
    {
      title: 'Hardware Development',
      description: 'Building and testing physical components',
    },
    {
      title: 'Software Development',
      description: 'Developing control systems and user interfaces',
    },
    {
      title: 'Testing & Iteration',
      description: 'Rigorous testing and refinement cycles',
    },
    {
      title: 'Production & Deployment',
      description: 'Manufacturing and delivery of final products',
    },
    {
      title: 'Continuous Improvement',
      description: 'Ongoing optimization and support',
    },
  ];

  const principles = [
    'Rapid iteration for faster innovation',
    'Transparent communication throughout the process',
    'Modular architecture for flexibility',
    'Risk mitigation at every stage',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1577976655502-85300c5ca2cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRlY2hub2xvZ3klMjBzZW5zb3JzfGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Technology development"
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
          <h1 className="text-5xl md:text-6xl mb-6">Development Process</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Our structured methodology for innovation
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
              Minimizing Risk, Maximizing Innovation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700">
              Our development process efficiently moves drone technology projects from concept to reality, ensuring quality, safety, and innovation at every step.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Textile to Intelligence Process */}
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
              From Textile to Intelligence
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Five phases of drone technology development
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {textilePhases.map((phase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="mb-8 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
                {index < textilePhases.length - 1 && (
                  <div className="ml-6 h-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Stages */}
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
              General Development Stages
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              A comprehensive approach to drone development
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {developmentStages.map((stage, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl">{stage.title}</h3>
                </div>
                <p className="text-gray-600">{stage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
                Development Principles
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-8">
                The core values that guide our development process
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{principle}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752937417731-6936a72270e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MzAzMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone innovation"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
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
              Want to Learn More?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-gray-100">
              Explore our technical details to see how we bring drone innovations to life
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/tech-details">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  View Technical Details
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
