import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { Button } from '../components/ui/button';
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

export function Blog() {
  const featuredPost = {
    id: 1,
    title: 'The Future of Autonomous Drones in Agriculture',
    excerpt: 'Explore how AI-powered drones are revolutionizing farming practices and increasing crop yields across India.',
    date: 'November 10, 2024',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1729980262766-61afa60a0f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzYzMDI0NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'DGCA Drone Regulations: What You Need to Know',
      excerpt: 'A comprehensive guide to understanding and complying with DGCA drone regulations in India.',
      date: 'November 5, 2024',
      category: 'Regulations',
      image: 'https://images.unsplash.com/photo-1694874025741-3b8f85df8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3NjMwNTAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Top 5 Drone Photography Tips for Beginners',
      excerpt: 'Master the art of aerial photography with these essential tips and techniques.',
      date: 'October 28, 2024',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1687320790370-e2338fdc095f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lfGVufDF8fHx8MTc2MzEwMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'upcoming-1',
      title: 'Upcoming Article',
      excerpt: 'More exciting content coming soon. Stay tuned for the latest insights and updates.',
      date: 'Coming Soon',
      category: 'Announcement',
      image: 'https://images.unsplash.com/photo-1752937417731-6936a72270e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9ufGVufDF8fHx8MTc2MzAzMjA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      isUpcoming: true,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Flydronics News & Insights</h1>
            <p className="text-xl text-gray-700">
              Trends in drone technology and smart innovation
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to={`/blog/${featuredPost.id}`}>
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                    <h2 className="text-3xl mb-4 group-hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl mb-12 text-center"
          >
            Latest Articles
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                {post.isUpcoming ? (
                  <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden h-full border-2 border-dashed border-gray-300">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-50"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                      <h3 className="text-xl mb-3 text-gray-500">{post.title}</h3>
                      <p className="text-gray-500 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full group">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <Badge className="mb-3">{post.category}</Badge>
                        <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
