import { useState } from 'react';
import { motion } from 'motion/react';
import { PlayCircle, BookOpen, Monitor, Award, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Badge } from '../components/ui/badge';
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

export function DroneLMS() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedPath, setSelectedPath] = useState<any>(null);

  const features = [
    {
      icon: PlayCircle,
      title: 'Interactive Video Lessons',
      description: '200+ videos with real flight footage and expert instruction',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Modules',
      description: '50+ structured learning paths from basics to advanced',
    },
    {
      icon: Monitor,
      title: 'Virtual Flight Simulator',
      description: '24/7 access with realistic flight environments',
    },
    {
      icon: Award,
      title: 'Digital Certificates',
      description: 'Verified, industry-recognized certifications',
    },
  ];

  const courses = [
    {
      title: 'Drone Fundamentals',
      level: 'Beginner',
      duration: '4 weeks',
      students: '2,500+',
      description: 'Learn the basics of drone operation, safety protocols, and regulations.',
      modules: ['Introduction to Drones', 'Safety Guidelines', 'Basic Controls', 'Regulations & Compliance'],
    },
    {
      title: 'Commercial Operator',
      level: 'Intermediate',
      duration: '8 weeks',
      students: '1,800+',
      description: 'Advanced training for professional drone operations and DGCA certification.',
      modules: ['Advanced Flight Operations', 'Commercial Applications', 'DGCA Certification Prep', 'Risk Management'],
    },
    {
      title: 'Drone Engineering',
      level: 'Advanced',
      duration: '12 weeks',
      students: '950+',
      description: 'Master drone design, assembly, and maintenance for custom UAV development.',
      modules: ['UAV Design Principles', 'Electronics & Sensors', 'Flight Controllers', 'Custom Build Projects'],
    },
  ];

  const learningPaths = [
    {
      title: 'Hobbyist Pilot',
      duration: '6 weeks',
      description: 'Perfect for recreational drone enthusiasts who want to fly safely and legally.',
      modules: ['Drone Fundamentals', 'Photography Basics', 'Safe Flying Practices'],
    },
    {
      title: 'Commercial Operator',
      duration: '12 weeks',
      description: 'Complete path to becoming a certified commercial drone pilot.',
      modules: ['Drone Fundamentals', 'Advanced Operations', 'DGCA Certification', 'Business Applications'],
    },
    {
      title: 'Drone Engineer',
      duration: '16 weeks',
      description: 'Comprehensive training for drone design and manufacturing.',
      modules: ['Engineering Basics', 'UAV Design', 'Electronics', 'Custom Manufacturing'],
    },
    {
      title: 'Instructor Certification',
      duration: '10 weeks',
      description: 'Become a certified drone instructor and train the next generation.',
      modules: ['Teaching Methodology', 'Advanced Flight Skills', 'Safety Instruction', 'Certification Process'],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1659543690669-d40b1bfefc12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRyYWluaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzExMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drone education"
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
          <h1 className="text-5xl md:text-6xl mb-6">DroneLMS</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Advanced Learning Management System for Comprehensive Drone Education
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Learning Today
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Key Features
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Everything you need to master drone technology
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl"
              >
                <feature.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Available Courses */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl mb-4">
              Available Courses
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Choose the course that fits your skill level
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <Button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Paths */}
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
              Learning Paths
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Guided journeys to achieve your drone career goals
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl">{path.title}</h3>
                  <Badge>{path.duration}</Badge>
                </div>
                <p className="text-gray-700 mb-6">{path.description}</p>
                <div className="mb-6">
                  <div className="text-sm mb-2">Includes:</div>
                  <ul className="space-y-2">
                    {path.modules.map((module, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => setSelectedPath(path)}
                  variant="outline"
                  className="w-full"
                >
                  Explore Path
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Detail Dialog */}
      <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCourse?.title}</DialogTitle>
            <DialogDescription>
              {selectedCourse?.level} • {selectedCourse?.duration} • {selectedCourse?.students} enrolled
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>{selectedCourse?.description}</p>
            <div>
              <h4 className="mb-2">Course Modules:</h4>
              <ul className="space-y-2">
                {selectedCourse?.modules.map((module: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Learning Path Dialog */}
      <Dialog open={!!selectedPath} onOpenChange={() => setSelectedPath(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedPath?.title}</DialogTitle>
            <DialogDescription>{selectedPath?.duration}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>{selectedPath?.description}</p>
            <div>
              <h4 className="mb-2">Path Modules:</h4>
              <ul className="space-y-2">
                {selectedPath?.modules.map((module: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full">Start This Path</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
