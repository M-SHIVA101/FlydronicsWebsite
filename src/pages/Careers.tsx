import { motion } from 'motion/react';
import { Rocket, Users, TrendingUp, Mail, Phone, Linkedin } from 'lucide-react';
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

export function Careers() {
  const reasons = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Work on cutting-edge drone technology and push the boundaries of what\'s possible in aerial systems.',
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'Contribute to meaningful solutions that transform industries and improve lives across India.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Develop your skills in a rapidly evolving field with continuous learning opportunities.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwdGVhbSUyMHdvcmtpbmd8ZW58MXx8fHwxNzYzMTEyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team working"
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
          <h1 className="text-5xl md:text-6xl mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Join passionate innovators revolutionizing the smart textile industry
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
              Build the Future with Us
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-4">
              At Flydronics, we're seeking individuals who want to revolutionize the drone technology industry. Whether you're an experienced professional or an aspiring intern, we welcome those who share our passion for innovation.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700">
              Both full-time professionals and interns are welcome to join our growing team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Join Flydronics?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Be part of something transformative
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <reason.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Benefits */}
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
                src="https://images.unsplash.com/photo-1608792992053-f397e328a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBiYW5nYWxvcmV8ZW58MXx8fHwxNzYzMDk4ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office environment"
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
                What We Offer
              </motion.h2>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  'Opportunity to work on advanced drone technology',
                  'Contribute to meaningful industry solutions',
                  'Develop skills in a rapidly evolving field',
                  'Collaborative and innovative work environment',
                  'Continuous learning and professional development',
                  'Competitive compensation and benefits',
                  'Work with cutting-edge AI and autonomous systems',
                  'Make a real impact on Indian agriculture and industry',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-100">
              Reach out to our COO for career-related inquiries
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl mb-2">---------------</h3>
                <p className="text-xl text-gray-200 mb-6">Chief Operating Officer</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:love.anderberg@flydronics.com" className="hover:underline">
                      info@flydronics.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Phone className="w-5 h-5" />
                    <a href="tel:+919876543210" className="hover:underline">
                      -----------
                    </a>
                  </div>

                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Linkedin className="w-5 h-5" />
                    <a href="https://linkedin.com/in/loveanderberg" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      linkedin.com/in/Flydronics
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Send Application
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-6">
              Current Opportunities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-700 mb-8">
              We're always looking for talented individuals to join our team. Positions available in engineering, training, sales, and operations. Contact us to learn about current openings.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Open Positions
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
