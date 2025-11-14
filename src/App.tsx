import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { DroneLMS } from './pages/DroneLMS';
import { Vision } from './pages/Vision';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Careers } from './pages/Careers';
import { DevelopmentProcess } from './pages/DevelopmentProcess';
import { TechDetails } from './pages/TechDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dronelms" element={<DroneLMS />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/tech-details" element={<TechDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
