import { motion } from 'motion/react';
import { GraduationCap, Target, Wrench, Camera, Shield, Package, Map, Sprout } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

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

export function Services() {
  const droneAbhyas = [
    'DGCA-certified training programs',
    'Hands-on flight practice',
    'Safety and regulations',
    'Commercial pilot licensing',
    'Advanced flight operations',
  ];

  const droneSeva = [
    { icon: Sprout, title: 'Precision Agriculture', desc: 'Crop monitoring, spraying, and analysis' },
    { icon: Map, title: 'Surveying & Mapping', desc: 'Accurate land surveying and 3D mapping' },
    { icon: Camera, title: 'Photography & Videography', desc: 'Professional aerial content creation' },
    { icon: Shield, title: 'Security & Surveillance', desc: 'Advanced monitoring solutions' },
    { icon: Package, title: 'Infrastructure Inspection', desc: 'Safe and efficient inspections' },
  ];

  const droneNirman = [
    'Custom UAV development',
    'Precision manufacturing',
    'Quality assurance',
    'Regulatory compliance',
    'Maintenance support',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1687320790370-e2338fdc095f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lfGVufDF8fHx8MTc2MzEwMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drone services"
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
          <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Comprehensive drone solutions for every industry
          </p>
        </motion.div>
      </section>

      {/* Drone Abhyas Section */}
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
                src="https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRyYWluaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone training"
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
                <GraduationCap className="w-12 h-12 text-blue-600" />
                <h2 className="text-4xl">Drone Abhyas</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-6">
                Training & Certification
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                Comprehensive drone training programs designed to equip you with the skills and certifications needed for professional drone operations.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {droneAbhyas.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className="mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Enroll Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Drone Seva Section */}
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
              <Target className="w-12 h-12 text-purple-600" />
              <h2 className="text-4xl">Drone Seva</h2>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700">
              Professional Services Across Industries
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {droneSeva.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Drone Nirman Section */}
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
                <Wrench className="w-12 h-12 text-indigo-600" />
                <h2 className="text-4xl">Drone Nirman</h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-6">
                Custom Manufacturing
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8">
                Industry-grade drone design and manufacturing services, delivering custom UAV solutions tailored to your specific needs.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {droneNirman.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className="mt-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Request Quote
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752937417731-6936a72270e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MzAzMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone manufacturing"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
              Additional Services
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <Camera className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Aerial Photography</h3>
                <p className="text-gray-100">Professional drone photography and videography services</p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Security Solutions</h3>
                <p className="text-gray-100">Advanced surveillance and monitoring systems</p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <Package className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Delivery Services</h3>
                <p className="text-gray-100">Drone-based delivery and logistics solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
