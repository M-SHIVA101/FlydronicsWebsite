import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogPost() {
  const { id } = useParams();

  const posts: Record<string, any> = {
    '1': {
      title: 'The Future of Autonomous Drones in Agriculture',
      excerpt: 'Explore how AI-powered drones are revolutionizing farming practices and increasing crop yields across India.',
      date: 'November 10, 2024',
      author: 'Arjun Patel',
      category: 'Agriculture',
      image: 'https://images.unsplash.com/photo-1729980262766-61afa60a0f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmllbGR8ZW58MXx8fHwxNzYzMDI0NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Agriculture in India is undergoing a dramatic transformation, and autonomous drones are at the forefront of this revolution. These intelligent flying machines are changing how farmers monitor crops, apply pesticides, and manage their fields.</p>

        <h2>The Rise of Precision Agriculture</h2>
        <p>Precision agriculture uses technology to optimize crop yields and reduce waste. Autonomous drones equipped with advanced sensors and AI algorithms can:</p>

        <ul>
          <li>Monitor crop health in real-time</li>
          <li>Detect diseases and pest infestations early</li>
          <li>Apply fertilizers and pesticides with pinpoint accuracy</li>
          <li>Create detailed field maps for better planning</li>
          <li>Assess irrigation needs across large areas</li>
        </ul>

        <h2>AI-Powered Analysis</h2>
        <p>The integration of artificial intelligence takes drone capabilities to the next level. Machine learning algorithms can analyze multispectral imagery to identify subtle changes in plant health that are invisible to the human eye. This early detection allows farmers to address problems before they spread, saving both crops and resources.</p>

        <h2>Impact on Indian Farmers</h2>
        <p>For Indian farmers, these technologies represent a significant opportunity. With labor costs rising and climate patterns becoming increasingly unpredictable, autonomous drones offer a cost-effective solution for managing large agricultural operations. Early adopters have reported yield increases of 15-20% and pesticide reduction of up to 40%.</p>

        <h2>The Road Ahead</h2>
        <p>As drone technology continues to advance and costs decrease, we expect to see widespread adoption across India's agricultural sector. At Flydronics, we're committed to making this technology accessible to farmers of all scales, from small family farms to large commercial operations.</p>

        <p>The future of agriculture is in the sky, and it's autonomous.</p>
      `,
    },
    '2': {
      title: 'DGCA Drone Regulations: What You Need to Know',
      excerpt: 'A comprehensive guide to understanding and complying with DGCA drone regulations in India.',
      date: 'November 5, 2024',
      author: 'Priya Sharma',
      category: 'Regulations',
      image: 'https://images.unsplash.com/photo-1694874025741-3b8f85df8e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3NjMwNTAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Understanding and complying with DGCA (Directorate General of Civil Aviation) regulations is essential for anyone operating drones in India. This comprehensive guide will help you navigate the regulatory landscape.</p>

        <h2>Registration Requirements</h2>
        <p>All drones operating in India must be registered with the DGCA through the Digital Sky platform. The registration process includes:</p>

        <ul>
          <li>Creating an account on the Digital Sky platform</li>
          <li>Submitting drone specifications and documentation</li>
          <li>Obtaining a Unique Identification Number (UIN)</li>
          <li>Acquiring necessary insurance coverage</li>
        </ul>

        <h2>Drone Categories</h2>
        <p>The DGCA classifies drones into five categories based on weight: Nano (up to 250g), Micro (250g to 2kg), Small (2kg to 25kg), Medium (25kg to 150kg), and Large (above 150kg). Each category has specific operational requirements and restrictions.</p>

        <h2>Pilot Licensing</h2>
        <p>For commercial drone operations, pilots must obtain a Remote Pilot License from a DGCA-approved training organization. At Flydronics, we offer comprehensive DGCA-certified training programs that prepare you for both the written examination and practical flight test.</p>

        <h2>No-Fly Zones</h2>
        <p>India has designated numerous no-fly zones including airports, military installations, and sensitive government buildings. Always check the Digital Sky platform before planning your flight to ensure compliance with airspace restrictions.</p>

        <h2>Staying Compliant</h2>
        <p>Regulations continue to evolve as the drone industry grows. We recommend staying informed through official DGCA channels and participating in regular training updates to ensure ongoing compliance.</p>
      `,
    },
    '3': {
      title: 'Top 5 Drone Photography Tips for Beginners',
      excerpt: 'Master the art of aerial photography with these essential tips and techniques.',
      date: 'October 28, 2024',
      author: 'Rajesh Kumar',
      category: 'Photography',
      image: 'https://images.unsplash.com/photo-1687320790370-e2338fdc095f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lfGVufDF8fHx8MTc2MzEwMjY5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      content: `
        <p>Aerial photography opens up a whole new perspective on the world. Whether you're capturing landscapes, events, or real estate, these tips will help you create stunning aerial images.</p>

        <h2>1. Master the Basics First</h2>
        <p>Before focusing on photography, ensure you're comfortable with drone flight controls. Practice basic maneuvers in an open area until flying becomes second nature. This foundation allows you to concentrate on composition and timing when capturing images.</p>

        <h2>2. Plan Your Shots</h2>
        <p>Great aerial photography starts with planning. Scout your location in advance, check weather conditions, and identify interesting angles. Use apps to track sun position and lighting conditions for optimal shooting times. Golden hour (just after sunrise or before sunset) provides the most flattering light.</p>

        <h2>3. Use the Rule of Thirds</h2>
        <p>Enable grid lines on your drone's camera display and use the rule of thirds to create balanced, engaging compositions. Position key elements along the grid lines or at intersection points rather than centering everything in the frame.</p>

        <h2>4. Experiment with Altitude and Angles</h2>
        <p>Don't just shoot from maximum altitude. Try different heights and camera angles to find unique perspectives. Sometimes the most compelling shots come from medium altitude with a tilted camera angle, revealing both the subject and its surroundings.</p>

        <h2>5. Capture in RAW Format</h2>
        <p>If your drone supports it, shoot in RAW format for maximum editing flexibility. RAW files contain more image data than JPEGs, allowing you to recover details from shadows and highlights during post-processing. This is especially valuable for aerial photography where lighting can be challenging.</p>

        <h2>Bonus Tip: Practice Safety</h2>
        <p>Always prioritize safety over the perfect shot. Maintain visual line of sight, respect privacy, and follow all local regulations. A responsible drone pilot is a successful drone pilot.</p>
      `,
    },
  };

  const post = posts[id || ''];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-6">Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <Link to="/blog" className="inline-flex items-center gap-2 mb-6 text-gray-200 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
              <p className="text-xl text-gray-200 mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Read More Articles</h2>
          <Link to="/blog">
            <Button size="lg">
              View All Posts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
