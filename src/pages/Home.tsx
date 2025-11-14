import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Wrench, GraduationCap, Camera, Shield, Plane } from 'lucide-react';
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
      staggerChildren: 0.2,
    },
  },
};

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1694874025741-3b8f85df8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3NjMwNTAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drone flying in sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl mb-6"
          >
            You Dream It, We Drone It
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-gray-200">
            India's Premier Drone Technology Company
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-4 justify-center flex-wrap">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/dronelms">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                Start Learning
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl mb-4">
              Our Three Pillars
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Training, Services, and Manufacturing Excellence
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Drone Abhyas */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRyYWluaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Drone training"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <GraduationCap className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl mb-2">Drone Abhyas</h3>
                  <p className="text-gray-200 mb-4">
                    Comprehensive training and DGCA-certified courses
                  </p>
                  <Link to="/dronelms">
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-blue-900">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Drone Seva */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687320790370-e2338fdc095f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lfGVufDF8fHx8MTc2MzEwMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Drone services"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Target className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl mb-2">Drone Seva</h3>
                  <p className="text-gray-200 mb-4">
                    Professional drone services across industries
                  </p>
                  <Link to="/services">
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-purple-900">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Drone Nirman */}
            <motion.div variants={fadeInUp} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1752937417731-6936a72270e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MzAzMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Drone manufacturing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Wrench className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl mb-2">Drone Nirman</h3>
                  <p className="text-gray-200 mb-4">
                    Custom drone manufacturing and development
                  </p>
                  <Link to="/services">
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-indigo-900">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl mb-4">
              What We Provide
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Comprehensive drone solutions for every need
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Camera, title: 'Aerial Photography', desc: 'Professional aerial imaging services' },
              { icon: Shield, title: 'Security Solutions', desc: 'Advanced surveillance systems' },
              { icon: Plane, title: 'Surveying & Mapping', desc: 'Precision land surveying' },
              { icon: GraduationCap, title: 'Training Programs', desc: 'DGCA certified courses' },
              { icon: Target, title: 'Agriculture Services', desc: 'Crop monitoring and spraying' },
              { icon: Wrench, title: 'Custom Manufacturing', desc: 'Tailored drone solutions' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-gray-100">
              Join thousands of students and hundreds of enterprises transforming their industries with drone technology
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/careers">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Join Our Team
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
