import { motion } from 'motion/react';
import { Users, Award, Building, Globe } from 'lucide-react';
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

export function About() {
  const achievements = [
    { number: '10,000+', label: 'Students Trained' },
    { number: '500+', label: 'Drones Deployed' },
    { number: '50+', label: 'Cities Nationwide' },
    { number: '100+', label: 'Corporate Clients' },
  ];

  const leaders = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Former ISRO engineer with passion for aerial innovation',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Training',
      description: 'DGCA certified instructor with 8+ years experience',
    },
    {
      name: 'Arjun Patel',
      role: 'Chief Technology Officer',
      description: 'Specialist in AI and autonomous systems',
    },
    {
      name: 'Sneha Reddy',
      role: 'Manufacturing Head',
      description: 'Expert in precision UAV production',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1608792992053-f397e328a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBiYW5nYWxvcmV8ZW58MXx8fHwxNzYzMDk4ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern office"
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
          <h1 className="text-5xl md:text-6xl mb-6">About Flydronics</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Pioneering the future of aerial innovation since 2018
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
                Our Story
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                Flydronics is India's premier drone technology company, pioneering the future of aerial innovation. The company was founded in 2018 by aerospace engineers with a mission to make drone technology accessible and beneficial for everyone.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-700 mb-4">
                What started in a small Bangalore workshop has now grown into a national leader in drone education, services, and manufacturing, serving thousands of students and hundreds of enterprises across India.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-700">
                Flydronics' story is rooted in passion for aerial systems and the belief that drones can empower industries, farmers, students, and innovators. Over the years, the organization has expanded to become one of India's most trusted names in drone technology.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzYzMTEyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team working"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 max-w-3xl mx-auto">
              To democratize drone technology so that it becomes a powerful tool in education, industry, and societal development.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="text-4xl md:text-5xl text-blue-600 mb-2">{item.number}</div>
                <div className="text-gray-700">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
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
              Leadership Team
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Meet the experts driving innovation at Flydronics
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <Users className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-xl mb-1">{leader.name}</h3>
                <p className="text-blue-600 mb-2">{leader.role}</p>
                <p className="text-gray-600">{leader.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <motion.div variants={fadeInUp}>
              <Building className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Headquarters</h3>
              <p className="text-gray-100">Electronic City, Bangalore, Karnataka, India</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Reach</h3>
              <p className="text-gray-100">50+ cities across India</p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Contact</h3>
              <p className="text-gray-100">+91 98765 43210</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
